import Order from '../models/Order.js'

export const createOrder = async (req, res, next) => {
  const newOrder = new Order(req.body)
  try {
    const savedOrder = await newOrder.save()
    res.status(200).send(savedOrder)
  } catch (err) {
    res.status(500).json(err)
  }
}
export const updateOrder = async (req, res, next) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updatedOrder)
  } catch (err) {
    res.status(500).json(err)
  }
}

export const getOrder = async (req, res, next) => {
  try {
    const Order = await Order.findById(req.params.id)

    res.status(200).json(Order)
  } catch (err) {
    res.status(500).json(err)
  }
}

export const getAllOrder = async (req, res, next) => {
  const qNew = req.query.new
  const qCategory = req.query.category

  try {
    let products
    if (qNew) {
      orders = await Order.find().sort({ createdAt: -1 }).limit(1)
    } else if (qCategory) {
      orders = await Order.find({
        categories: {
          $in: [qCategory],
        },
      })
    } else {
      products = await Order.find()
    }

    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json(err)
  }
}

export const deleteOrder = async (req, res, next) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.status(200).json('Order has been deleted!')
  } catch (err) {
    res.status(500).json(err)
  }
}
export const getStats = async (req, res, next) => {
  const date = new Date()
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: '$createdAt' },
          sales: '$amount',
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: '$sales' },
        },
      },
    ])
    res.status(200).json(income)
  } catch (err) {
    res.status(500).json(err)
  }
}
