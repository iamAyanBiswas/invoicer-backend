import express from 'express'
import cookieParser from 'cookie-parser'
import multer from 'multer'
import cors from 'cors'
const app=express()


app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(cookieParser())


app.get('/',(req,res)=>{
    res.send("runing...")
})



import loginRoutes from './routes/login.routes.js'
import signupRoutes from './routes/signup.routes.js'
import userRoutes from './routes/user.routes.js'
import countViews from './routes/views.routes.js'


app.use("/api/login",loginRoutes)
app.use("/api/sign-up",signupRoutes)
app.use("/api/user",userRoutes)
app.use("/api/views",countViews)

export default app