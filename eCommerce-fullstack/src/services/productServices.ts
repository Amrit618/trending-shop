import Features from '../util/apifeatures'
import { NotFoundError } from '../helpers/apiError'
import Product, { ProductDocument } from '../models/productModel'
import { ObjectId } from 'mongoose'

// get all products
 export const getAllProducts = async() => {
  const resultPerPage = 20
  const productCount = await  Product.countDocuments()

  const apiFeature = new Features(Product.find(),resultPerPage)
    .search()
    .filter()
    .pagination(resultPerPage)
  /* const apifeature = apiFeature(Product.find(),req.query).search() */
  const products = await apiFeature.query
 return products
}
// Update a Product
const updateProducts = async (
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  return await Product.findByIdAndUpdate(productId, update, {
    new: true,
  })
}


// get details of the product
export const getProductDetails = async (productId: string) => {
  const product = await Product.findById(productId)
  if (!product) {
    throw new Error('Product doesnot exist')
  }
  return product
}

// Create Product--ADMIN

export const createProduct = async (newproduct: ProductDocument) => {
  const product = await Product.create(newproduct)
  return product
}

//delete a product
export const deleteProduct = async (productId: string) => {
  const product = Product.findByIdAndDelete(productId)
  if (!product) {
    throw new NotFoundError(`Product ${productId} is not found.`)
  }
  return product
}

export default { getProductDetails,
   createProduct,
    deleteProduct,
    getAllProducts,
  updateProducts}
   
