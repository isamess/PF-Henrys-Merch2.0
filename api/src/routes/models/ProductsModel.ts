import { Schema, model } from 'mongoose'

const productSchema = new Schema({

  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
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
  image:{
    public_id: String,
    secure_url: String
  },
  description: {
    type:String,
    trim: true
  }
}, 
{
  versionKey: false,
  timestamps: true
})

export default model('Products', productSchema)
