import express from "express";
import AuthMiddleware from '../middleware/auth.js'

import {getProduct , createProduct , updateProduct , deleteProduct } from '../controller/product.controller.js'
const router = express.Router();

router.get("/",getProduct)

router.post("/" ,AuthMiddleware,createProduct)

router.put('/:id' , updateProduct)

router.delete('/:id' , deleteProduct)

export default router;