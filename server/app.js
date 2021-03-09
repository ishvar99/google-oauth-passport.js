require('dotenv').config({path:'../.env'})
const express =require('express')
const keys =require('./config/keys')
require('./services/passport')
const cookieSession =require('cookie-session')
const authRoutes=require('./routes/auth')
const app=express()
const PORT = 5000
const connectDB = require("./database/db")
const passport = require('passport')
//connect to database
connectDB()
app.use(cookieSession({
 maxAge:30 * 24 * 60 * 60 * 1000,
 keys:[keys.CookieKey]
}))
app.use(passport.initialize())
app.use(passport.session())
app.use('/auth/google',authRoutes);
app.listen(process.env.PORT||PORT,()=>{
 console.log(`Server is running on PORT ${PORT}`)
})