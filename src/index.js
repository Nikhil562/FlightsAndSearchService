const express=require("express");
const {PORT}= require('./config/serverConfig')

const app=express();
app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`)
    console.log(process.env.PORT)
})