import {Schema, model, Document} from 'mongoose'
const mongoosePaginate= require ('mongoose-paginate-v2')
import {category} from '../utils/types'


const categorySchema = new Schema({
    name: String,
  });

  categorySchema.plugin(mongoosePaginate);
  
  // modifica el _id de lo que devuelve la DB por id y remueve el __v
  categorySchema.set("toJSON", {
    transform: (_document, returnedObject) => {
      returnedObject.id = returnedObject._id;
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });
  
  interface CategoryDocument extends Document, category {}
  
  
  
 export const Category= model("Category", categorySchema)