const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    confirmPassword: {type:String,required:true}
})

const productSchema = mongoose.Schema({
    name:{type:String,required:true},
    title:{type:String,required:true, default:"No title given by the product owner"},
    image: {type:String,required:true},
    description:{type:String,default:"See the Images carfully before buying"},
    price: {type:Number,required:true},
    category: {type:String,required:true , default:"Other"},
    userId: {type:String, default:"Anonymous"},
})

const Usermodel = mongoose.model("user",userSchema)
const ProductModel = mongoose.model("product",productSchema)

module.exports={Usermodel,ProductModel};