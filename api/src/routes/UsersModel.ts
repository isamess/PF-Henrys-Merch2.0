import {Schema, model} from 'mongoose';


const userSchema= new Schema({
    id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
email:{

    type:String,
    required:true,
    trim:true
},
password:{
    type: String,
    required:true,
    trim: true
},
adress:{
    type: String,
    required: true,


},
admin:{
    type:String,
    required: true
}, 

}, {
    versionKey:false,
    timestamps: true})

    export default model('Users', userSchema)