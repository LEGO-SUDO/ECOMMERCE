import express from 'express'
import stripe from 'stripe'

stripe(process.env.STRIPE_KEY)
const router = express.Router()

export default router
