import mongoose from "mongoose";

export default async function connectdb(){
  try{
    const connect = await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected To DB Successfully")
  }catch(err){
    console.log("Connecting to DB Failed");
  }
} 