import { Router } from 'express'
import orderController from '../controllers/ordersController'

const orderRoute = Router()

orderRoute.get('', orderController.getOrders)
orderRoute.get('/:id', orderController.getOrderById)
orderRoute.post('', orderController.createOrder)
orderRoute.put('/:id', orderController.updateOrder)
orderRoute.delete('/:id', orderController.deleteOrder)

export default orderRoute
