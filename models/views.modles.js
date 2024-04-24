import mongoose, { Schema } from 'mongoose'
const viewsSchma = new Schema({
    page: {
        type: String,
    },
    total: {
        type: Number,
        default: 0
    }
})


export const views = mongoose.model('views', viewsSchma)