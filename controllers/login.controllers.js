import validator from 'validator';
import bcrypt from 'bcrypt'
import { handler } from '../utils/handler.js'
import { apiError } from '../utils/apiError.js'
import { apiResponce } from '../utils/apiResponce.js'
import { signup } from '../models/signup.models.js'
import { generateAccessToken, generateRefreshToken } from '../function/jwt.function.js';



const loginUser = handler(async (req, res) => {


    async function createToken(id) {
        let accessToken = generateAccessToken({ _id: id })
        let refreshToken = generateRefreshToken({ _id: id })
        return { accessToken, refreshToken }
    }




    let body = req.body
    let email = body.email
    let password = body.password


    const options = {
        httpOnly: true,
        secure: true
    }

    //handle error
    try {
        if (validator.isEmpty(email) || validator.isEmpty(password)) {
            throw new apiError(401, "Email or Password can't be empty")
        }
        if (!validator.isEmail(email)) {
            throw new apiError(402, "Enter Valid Email")
        }
        let findEmail = await signup.findOne({ email: email });
        if (findEmail === null) {
            throw new apiError(409, "Not valid email")
        }
        else {
            try {
                let pw = await bcrypt.compare(password, findEmail.password);
                // let pw = await findEmail.isPasswordCorrect(password)
                if (pw) {
                    let { accessToken, refreshToken } = await createToken(findEmail._id)
                    findEmail.token = refreshToken
                    await findEmail.save()
                    return res.status(201)
                        .cookie("accessToken", accessToken, options)
                        .cookie("refreshToken", refreshToken, options)
                        .json(
                            new apiResponce(200, { accessToken: accessToken, refreshToken: refreshToken, profile: findEmail.profile }, "User login Successfully")
                        )
                }
                else {
                    throw new apiError(500, "Internal sarver error from login to DB")
                }
            }
            catch (err) {
                throw new apiError(400, "Password is not valid")
            }
        }
    }
    catch (err) {
        throw new apiError(201,"Invalid User")
    }

})

export default loginUser