import mongoose, { model } from 'mongoose'

const imgModel = new mongoose.Schema({
  name: String,
  desc: String,
  img:
    {
      data: Buffer,
      contentType: String
    }
})

// Image is a model which has a schema image

export default model('Image', imgModel)
