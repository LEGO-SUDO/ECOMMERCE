import express from 'express'
import {
  createCart,
  updateCart,
  deleteCart,
  getCart,
  getAllCart,
} from '../controller/cart.js'
import {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAndAuthorization,
} from './verifyToken.js'

const router = express.Router()

//Create Cart
router.post('/new', verifyToken, createCart)

//Update Cart
router.post('/update/:id', verifyTokenAndAuthorization, updateCart)

// delete Cart
router.delete('/delete/:id', verifyTokenAndAuthorization, deleteCart)

// get a cart
router.get('/find/:userId', verifyTokenAndAuthorization, getCart)

// get all cart
router.get('/', verifyTokenAndAdmin, getAllCart)

export default router
