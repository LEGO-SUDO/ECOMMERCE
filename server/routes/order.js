import express from 'express'
import {
  createOrder,
  updateOrder,
  deleteOrder,
  getOrder,
  getAllOrder,
  getStats,
} from '../controller/order.js'
import {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAndAuthorization,
} from './verifyToken.js'

const router = express.Router()

//Create order
router.post('/new', verifyToken, createOrder)

//Update order
router.post('/update/:id', verifyTokenAndAdmin, updateOrder)

// delete order
router.delete('/delete/:id', verifyTokenAndAdmin, deleteOrder)

// get a order
router.get('/find/:userId', verifyTokenAndAuthorization, getOrder)

// get all orders
router.get('/', verifyTokenAndAdmin, getAllOrder)

// income
router.get('/income', verifyTokenAndAdmin, getStats)

export default router
