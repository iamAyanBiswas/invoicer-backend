import validator from 'validator';
import { handler } from '../utils/handler.js'
import { apiError } from '../utils/apiError.js'
import { apiResponce } from '../utils/apiResponce.js'
import { signup } from '../models/signup.models.js';

import bcrypt from 'bcrypt'
import { generateAccessToken , generateRefreshToken  } from '../function/jwt.function.js';

const signupUser = handler(async (req, res) => {


    async function createToken(id) {
        let accessToken=generateAccessToken({_id:id})
        let refreshToken=generateRefreshToken({_id:id})
        return {accessToken , refreshToken}
    }

    let body = req.body
    let email = body.email
    let password = body.password

    const options = {
        httpOnly: true,
        secure: true
    }

    //handle error
    if (validator.isEmpty(email) || validator.isEmpty(password)) {
        throw new apiError(401, "Email or Password can't be empty")
    }
    if (!validator.isEmail(email)) {
        throw new apiError(402, "Enter Valid Email")
    }
    let findEmail = await signup.findOne({ email: email });
    if (findEmail !== null) {
        throw new apiError(401, "User already exist")
    }
    try {
        password=await bcrypt.hash(password, 10)
        const isSignup = new signup({ email: email, password: password });
        const signupStatus = await isSignup.save();
        if (signupStatus) {
            let {accessToken , refreshToken} =await createToken(signupStatus._id)

            //update the value of 'reffreshToken'
            signupStatus.token=refreshToken
            await signupStatus.save({validateBeforeSave: false})
            return res.status(201)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(
                new apiResponce(200, {accessToken:accessToken, refreshToken:refreshToken}, "User registered Successfully")
            )
        }
    }
    catch (err) {
        console.log(err)
        throw new apiError(500, "Internal server error")
    }
})

export default signupUser