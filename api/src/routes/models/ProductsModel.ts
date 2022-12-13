import { Schema, model } from 'mongoose'

const productSchema = new Schema({

  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {

    type: Number,
    required: true,
    trim: true
  },
  stock: {
    type: Number,
    required: true,
    trim: true
  },
  category: {
    type: Array,
    required: true

  },
  color: {
    type: String,
    required: true
  },
  meta: {
    votes: Number,
    favs: Number
  },
  imgUrl: String,
  description: String
}, {
  versionKey: false,
  timestamps: true
})

export default model('Products', productSchema)
