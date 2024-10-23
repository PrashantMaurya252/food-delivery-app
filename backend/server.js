import express from "express";
import cors from 'cors'
import mongoDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import dotenv from 'dotenv'

const app =express()
const port = 6000

dotenv.config()
app.use(express.json())
app.use(cors())



mongoDB()

app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads'))
app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})