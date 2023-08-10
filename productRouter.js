const express = require("express");
const productRouter = express.Router();
const {ProductModel} = require("./model")


productRouter.get("/",async (req,res)=>{

    try {  
     const product = await ProductModel.find()
     res.send(product);
    // console.log(product)
    } catch (error) {
     res.send('Something Went Wrong !')
    }
 })
 productRouter.get("/:userId",async (req,res)=>{
    const {userId} = req.params
    try {  
     const product = await ProductModel.find({userId:userId})
     res.send(product);
    // console.log(userId)
    } catch (error) {
     res.send('Something Went Wrong !')
    }
 })

 productRouter.put("/:id",async (req,res)=>{
    // console.log(req.params)
    
    
    try {  
     const {name,title,image,description,price,category,userId} = req.body;
     const product = await ProductModel.findByIdAndUpdate(req.params.id,{name,title,image,description,price,category,userId})
     res.send("Updated");
    // console.log("product")
    } catch (error) {
     res.send('Something Went Wrong !')
    }
 })


productRouter.post("/",async (req,res)=>{

    try { 
      
     const {name,title,image,description,price,category,userId} = req.body;
     const product = new ProductModel({
        name,title,image,description,price,category,userId
     })
     await product.save();
     res.send(`${name} Your Product Added Successfully !`);
    // console.log(req.body)
    } catch (error) {
     res.send('Something Went Wrong !')
    }
 })

 productRouter.delete("/:id",async (req,res)=>{
    // console.log(req.params.id)
    
    try {  
     
     const product = await ProductModel.findOneAndDelete(req.params.id)
     res.send("Deleted Successfully!");
    // console.log(product)
    } catch (error) {
     res.send('Something Went Wrong !')
    }
 })


 module.exports = {productRouter}