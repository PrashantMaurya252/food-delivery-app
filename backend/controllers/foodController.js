import foodModel from "../models/foodModels.js";
import fs from 'fs'

const addFood =async(req,res)=>{
    let image_filename = `${req.file.filename}`;

    const {name,description,price,category,image} = req.body

    const food = new foodModel({
        name,
        description,
        price,
        category,
        image:image_filename
    })

    try {
        await food.save()
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error while saving product"})
    }
}

// all foods

const listfood = async(req,res)=>{

    try {
        const foods = await foodModel.find({})
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error,"listfood")
        res.json({success:false,message:"error in listfood"})
    }
}

export {addFood,listfood}