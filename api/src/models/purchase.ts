import { Schema, model } from 'mongoose'

const purchaseSchema = new Schema({

  _id_user: {
    type: Object,
    required: true
  },
  creditCard: {
    type: Object,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  paymentType: {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
})

export default model('Purchase', purchaseSchema)
