<<<<<<< HEAD
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
=======
import mongoose, { model } from 'mongoose';
 
const imgModel = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
 
//Image is a model which has a schema imageSchema
 
export default model('Image', imgModel);
>>>>>>> f6fb8f0773d9d2031a59b8294887fc90015fa553
