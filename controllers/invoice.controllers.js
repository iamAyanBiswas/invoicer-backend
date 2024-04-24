import { apiResponce } from "../utils/apiResponce.js"
import { apiError } from "../utils/apiError.js";
import { handler } from "../utils/handler.js"
import { invoice } from "../models/invoice.models.js";
let invoiceGenerator = handler(async (req, res) =>{
    try{
        let userDetails = req.userDetails
        let indexId=userDetails._id

        let body=req.body
        let name=body.name
        let email=body.email
        let mobile=body.mobile
        let address=body.address
        let tableData=body.tableData
        let totalValueOfParchase=body.totalValueOfParchase
        totalValueOfParchase=Number(totalValueOfParchase)

        const isInvoice = new invoice({ name: name, email: email, mobile: mobile, address: address, tableData:tableData , totalValueOfParchase: totalValueOfParchase, indexId: indexId});
        const invoiceStatus = await isInvoice.save();
        if(invoiceStatus){
            return res.status(201)
            .json(
                new apiResponce(200, {}, "Invoice submit Successfully")
            )
        }

    }
    catch(err){
        console.log(err)
        throw new apiError(500, 'Internal Error From Invoice')
    }
})

let invoiceGeneratorRequest =handler(async (req, res)=>{
    try{
        let userDetails = req.userDetails

        return res.status(201)
            .json(
                new apiResponce(200, {logo:userDetails.logo, name:userDetails.name,phone:userDetails.phone , address:userDetails.address ,publicEmail:userDetails.publicEmail}, "Invoice submit Successfully")
            )
    }
    catch(err){
        throw new apiError(500, 'Internal Error From Invoice')
    }
})

export  {invoiceGenerator , invoiceGeneratorRequest}