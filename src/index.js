const express=require("express");
const {PORT}= require('./config/serverConfig')
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({entended:true}))
app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`)
    console.log(process.env.PORT)
})