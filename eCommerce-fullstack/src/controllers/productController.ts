import { NextFunction, Request, Response } from 'express'
import Features from '../util/apifeatures'
import Product from '../models/productModel'
import productService from '../services/productServices'

// Create Product--ADMIN

const createProduct = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await productService.createProduct(req.body))
  } catch (error) {
    return next(error)
  }
}
// Get All products

const getAllProducts = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await productService.getAllProducts())
  } catch (error) {
    return next(error)
  }
}
// Update Product -- Admin
const updateProduct = async (req: Request, res: Response) => {
  const { productId } = req.params
  const product = req.body
  const productUpdate = await productService.updateProducts(productId, product)
  return res.json(productUpdate)
}


 
// Delete a Product
const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await productService.deleteProduct(req.params.productId)
    res.status(200).send('Deletion successful').end()
  } catch (error) {
    return next(error)
  }
}

// Get Single Product or details
const getProductDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json(await productService.getProductDetails(req.params.id))
  } catch (error) {
    return next(error)
  }
}

export default {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductDetails,
}


function next(error: unknown) {
  throw new Error('Function not implemented.')
}

