import express from 'express'
import { addUser, loginUser } from '../controller/auth.js'

const router = express.Router()

//create user
router.post('/signup', addUser)

//login
router.post('/signin', loginUser)

export default router
