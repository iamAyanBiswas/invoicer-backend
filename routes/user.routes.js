import {Router} from 'express';
import auth from '../middlewares/auth.middlewares.js';
import upload from '../middlewares/multer.middlewares.js';
import isJson from '../middlewares/isJson.middlewares.js';
import user from '../controllers/user.controllers.js';
import  {userProfile , userProfileRequest} from '../controllers/profile.controllers.js';
import { invoiceGenerator , invoiceGeneratorRequest } from '../controllers/invoice.controllers.js';
import getDataforAnalytics from '../controllers/analytics.controllers.js';
import history from '../controllers/history.controller.js';
const router = Router()




router.route("/").post(auth,user)

router.route("/profile").post(auth,
    upload.fields([{
        name:"logo",
        maxCount:1
    }])
    ,userProfile)
router.route("/profile/request").post(auth,userProfileRequest)
router.route('/invoice-generator').post(isJson,auth,invoiceGenerator)
router.route('/invoice-generator/request').post(isJson,auth,invoiceGeneratorRequest)
router.route('/history').post(isJson,auth,history)
router.route('/analytics').post(isJson,auth,getDataforAnalytics)


export default router