import {Schema, model} from 'mongoose'

const categorySchema = new Schema(
  {
    name:{type:String},
    _id: Schema.Types.ObjectId,
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    });
  
  
    export default model("Categories", categorySchema)
  
  




