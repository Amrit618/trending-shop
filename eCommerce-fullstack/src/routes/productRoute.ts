import { Router } from 'express'
import productController from '../controllers/productController'
import { isAuthenticatedUser } from '../middlewares/auth'

const productRoute = Router()

productRoute.get('/products', productController.getAllProducts)
productRoute.post('/product/new', productController.createProduct)
productRoute.put('/product/:id', productController.updateProduct)
productRoute.delete('/product/:id', productController.deleteProduct)
productRoute.get('/product/:id', productController.getProductDetails)

export default productRoute
