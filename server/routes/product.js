import express from 'express'
import {
  createProduct,
  updateProduct,
  getAllProducts,
  deleteProduct,
  getProduct,
} from '../controller/product.js'
import { verifyTokenAndAdmin } from './verifyToken.js'

const router = express.Router()

//Create product
router.post('/new', verifyTokenAndAdmin, createProduct)

//Update product
router.post('/update/:id', verifyTokenAndAdmin, updateProduct)

// delete product
router.delete('/delete/:id', verifyTokenAndAdmin, deleteProduct)

// get a product
router.get('/find/:id', getProduct)

// get all products
router.get('/', getAllProducts)
export default router
