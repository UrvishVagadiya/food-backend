import foodmodel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodmodel({
    name: req.body.name,
    image: image_filename,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food item added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to add food item" });
  }
}

const listFood=async(req,res)=>{
    try {
        const foods=await foodmodel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"});
    }
}


const removeFood=async (req,res)=>{
try {
    const food=await foodmodel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{})
    await foodmodel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Food Remove"})
} catch (error) {
    console.log("error")
    res.json({success:false,message:"error"})
}
}
export { addFood,listFood,removeFood };
