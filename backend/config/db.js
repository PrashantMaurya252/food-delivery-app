import mongoose from "mongoose";

async function mongoDB(){
    try {
       
        
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("database connected properly")
    } catch (error) {
        console.log("MongoDB connect error",error)
        process.exit(1)
    }
}

export default mongoDB