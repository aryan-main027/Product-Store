import Product from '../models/product.model.js'
import mongoose from 'mongoose';


export const getProduct = async (req,res)=> {
  try{
    const data = await Product.find({})
    res.status(200).json({ success: true, data: data });
  }catch(err){
    console.log("Error " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

export const createProduct = async (req,res) =>{
  try{
    const product = req.body;
    const newProduct = new Product(product);
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch(err){
    res.status(400).send("Error " + err.message);
  }
}

export const updateProduct = async(req,res)=>{
  try{
    const {name,price,image} = req.body;
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: "Invalid Product Id" });
    }
    const data = await Product.findByIdAndUpdate(id,{name,price,image},{new : true})
    // If we did not do {new : true} Product.findByIdAndUpdate this will return the old data not the updated data 
    res.status(200).json({ success: true, data: data });
  }catch(err){
    res.send("Error "+err.message);
  }
}

export const deleteProduct = async(req,res)=>{
  try{
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
		  return res.status(404).json({ success: false, message: "Invalid Product Id" });
	  }
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });

  }catch(err){
    res.status(500).send("Server Error "+err.message);
  }
}