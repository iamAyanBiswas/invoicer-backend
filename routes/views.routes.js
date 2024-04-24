import { views } from "../models/views.modles.js";
import {Router} from 'express';
const router = Router()


router.route("/").post(async(req,res)=>{
    try{
        const counter = await views.findOneAndUpdate(
            { page: 'home' },
            { $inc: { total: 1 } },
            { new: true, upsert: true }
          );
        
        res.json("Ok")
    }
    catch(err){
        console.log(err)
        res.json("Err")
        
    }
})

export default router