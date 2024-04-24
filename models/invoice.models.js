import mongoose, { Schema } from 'mongoose'
const now = new Date();
const invoiceSchma= new Schema({
    indexId:{
        type:String,
        require:true,
        index:true
    },
    name:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""
    },
    mobile:{
        type:String,
        default:""
    },
    address:{
        type:String,
        default:""
    },
    tableData:{
        type:Array,
        default:[]
    },
    totalValueOfParchase:{
        type:Number,
        default:"0"
    },
    date:{
        type:Date,
        default:now
    }
})


export const invoice = mongoose.model('invoice', invoiceSchma)