
import dotenv from 'dotenv'
dotenv.config()
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import express from "express";
import cors from 'cors'
import mongoDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";



mongoDB()
const app =express()
const port = process.env.PORT || 5000


app.use(express.json())
app.use(cors())







app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.get("/",(req,res)=>{
    res.send("API working")
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})