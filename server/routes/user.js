import express from 'express'
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from './verifyToken.js'
import {
  modifyUser,
  deleteUser,
  getUser,
  getUsers,
  getStats,
} from '../controller/User.js'
const router = express.Router()

//edit user
router.put('/:id', verifyTokenAndAuthorization, modifyUser)

// delete user
router.delete('/:id', verifyTokenAndAuthorization, deleteUser)

// get user
router.get('/find/:id', verifyTokenAndAdmin, getUser)

//get all users
router.get('/', verifyTokenAndAdmin, getUsers)

// get user stars
router.get('/stats', verifyTokenAndAdmin, getStats)

export default router
