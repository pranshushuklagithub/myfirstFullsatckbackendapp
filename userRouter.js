const express = require("express");
const router = express.Router();
const {Usermodel} = require("./model")
const jwt = require("jsonwebtoken")
require("dotenv").config();

router.post("/signup",async (req,res)=>{

   try {  
    const {name,email,password,confirmPassword} = req.body;
    const user = new Usermodel({
        name,email,password,confirmPassword
    })
    await user.save();
    res.send(`Hii ${name} Your Signup is Successfull ! Now Please Login`);
   } catch (error) {
    res.send('Something Went Wrong !')
   }
})

router.post("/login",async (req,res)=>{
    try {  
        const {email,password} = req.body;
        const user = await Usermodel.findOne({email,password});

        if(!user){
            res.send({"message" : "login failed, invalid credentials"})
        }
        else{
            // console.log(user)
            const token = jwt.sign({userId:user._id},process.env.SECRET_KEY);
            res.send({response:`Hii ${user.name} You're Logged in !`,token:token,name:user.name,userId:user._id});
        }
        
        // console.log(user)
       } catch (error) {
        res.send('Something Went Wrong !')
       }
})

module.exports = {router};