import mongoose, { Schema } from 'mongoose'
export const signupScema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    },
    logo: {
        type: String,
        require: false,
        default: ""
    },
    name: {
        type: String,
        require: false,
        default: ""
    },
    phone: {
        type: String,
        require: false,
        default: ""
    },
    publicEmail: {
        type: String,
        require: false,
        default: ""
    },
    address: {
        type: String,
        require: false,
        default: ""
    },
    profile: {
        type: Boolean,
        require: false,
        default: false
    },
    token:{
        type:String,
        require:false,
        default:""
    }
})




// signupScema.pre('save', async function (next) {
//     //vs code might be call to remove await but without await hash is'n possible
//     this.password = await bcrypt.hash(this.password, 10)
//     console.log(this.password)
//     next()

// })


//that is how we create castom mongoose method
// signupScema.methods.isPasswordCorrect = async function (password) {
//     return await bcrypt.compare(password, this.password)
// }





export const signup = mongoose.model('signup', signupScema)





//this for future reference for forget password
// signupScema.pre('save', async function(next){
//     if(this.isModified("password")){
//         this.password=bcrypt.hash(this.password , 10)
//         next()   `
//     }
//     else{
//         next()
//     }
// })


