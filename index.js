const express = require("express");

const {router} = require("./userRouter")
const {productRouter} = require("./productRouter")
const cors = require("cors")

const connection = require("./db")

const app = express();
app.use(express.json())
app.use(cors()) ;
app.use("/user",router)
app.use("/product",productRouter)

const Port = 8080;





app.listen(Port,()=>{
    try {
        connection()
        console.log(`listening on ${Port}`)
    } catch (error) {
        
    }
})