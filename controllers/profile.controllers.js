import { apiResponce } from "../utils/apiResponce.js"
import { apiError } from "../utils/apiError.js";
import { handler } from "../utils/handler.js"
import {uploadFile} from "../utils/cloudinary.js"
let userProfile = handler(async (req, res) => {
    try {
        let body=req.body
        let userDetails = req.userDetails
        let logoLocalPath
        let logoLocalPathOnCloudinary
        console.log(req.files.logo[0])
        if(req.files.logo[0] !== undefined){
            logoLocalPath = await req.files?.logo[0]?.path 
            logoLocalPathOnCloudinary=await uploadFile(logoLocalPath)
        }
        else{
            logoLocalPathOnCloudinary=userDetails.logo
        }
        console.log(logoLocalPath)
        // if(!logoLocalPath){
        //     throw new apiError(400,"logo missing")
        // }
         

        let logo=logoLocalPathOnCloudinary
        let name=body.name
        let phone=body.phone
        let publicEmail=body.publicEmail
        let address=body.address
        let profile=true

        userDetails.logo=logo
        userDetails.name=name
        userDetails.phone=phone
        userDetails.publicEmail=publicEmail
        userDetails.address=address
        userDetails.profile=profile

        let isProfileComplete= await userDetails.save();
        console.log(isProfileComplete)
        return res.status(201).json(
            new apiResponce(200, {logo:isProfileComplete.logo ,name:isProfileComplete.name ,phone:isProfileComplete.phone , address:isProfileComplete.address ,publicEmail:isProfileComplete.publicEmail}, "profile User login Successfully")
        )
    } catch (error) {
        console.log(error)
        throw new apiError(401 , "Profile Error")
    }

})


let userProfileRequest = handler(async (req, res) => {
    try {
        let body=req.body
        let userDetails = req.userDetails

       
        return res.status(201).json(
            new apiResponce(200, {logo:userDetails.logo ,name:userDetails.name ,phone:userDetails.phone , address:userDetails.address ,publicEmail:userDetails.publicEmail}, "First request Successfully")
        )
    } catch (error) {
        console.log(error)
        throw new apiError(401 , "Profile Error")
    }

})
export  {userProfile , userProfileRequest}