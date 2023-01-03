<<<<<<< HEAD:api/src/routes/models/ProductsModel.ts
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
=======
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
  details: String
}, {
  versionKey: false,
  timestamps: true
})

export default model('Products', productSchema)
>>>>>>> 302d40c4b91cae37b02edd0dbc7eed091e25da9c:api/src/models/products.ts
