import express from 'express';

export default function AuthMiddleware(req,res,next){
  const data = req.body;

  const mandatory = ["name" , "price" , "image"];

  const isAllowed = mandatory.every((k) => Object.keys(req.body).includes(k));

  if(!isAllowed){
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }

  next();
}
