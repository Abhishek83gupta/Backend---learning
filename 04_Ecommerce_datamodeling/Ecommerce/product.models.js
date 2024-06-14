const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    descrpition:{
        required:true,
        type:String
    },
    name:{
        required:true,
        type:String
    },
    productImage:{
        type:String
    },
    price : {
        type:Number,
        default:0
    },
    stock:{
        type:moongoose.Schema.Types.ObjectId,
        ref:"Categroy"
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})


export const Product = mongoose.model('Product',productSchema)