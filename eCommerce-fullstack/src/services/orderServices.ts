import { NotFoundError } from '../helpers/apiError'
import Order, { OrderDocument } from '../models/orderModel'

const getOrders = async () => {
  return await Order.find()
}

const getOrderById = async (orderId: string) =>{
  const existedOrder = await Order.findById(orderId)
  if (!existedOrder) {
    throw new NotFoundError('Order does not exist')
  }
  return existedOrder
}

const createOrder = async (order: OrderDocument) => {
  return await order.save()
}

const updateOrder = async (orderId: string, order: Partial<OrderDocument>) => {
  const { address, status } = order
  const existedOrder = await Order.findById(orderId)
  if (existedOrder) {
    return await Order.findByIdAndUpdate(
      existedOrder._id,
      {
        address: address,
        status: status,
      },
      {
        new: true,
      }
    )
  } else {
    throw new NotFoundError('Order does not exist')
  }
}

const deleteOrder = async (orderId: string) => {
  const alreadyOrder = await Order.findById(orderId)
  if (!alreadyOrder) {
    throw new NotFoundError('Nothing to delete')
  }
  return await Order.findByIdAndDelete(alreadyOrder._id)
}

export default {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
}
