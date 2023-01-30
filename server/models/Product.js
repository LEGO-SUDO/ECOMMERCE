import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },

    img: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    categories: {
      type: Array,
      required: true,
    },
    size: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)
export default mongoose.model('Product', productSchema)
