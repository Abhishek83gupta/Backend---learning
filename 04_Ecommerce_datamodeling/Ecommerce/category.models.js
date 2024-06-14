const mongoose = require('mongoose')

const caterorySchema = new mongoose.Schema({
  name : {
    type :String,
    required:true,
  },
},{timestamps:true})

export const Category = mongoose.model('Category',caterorySchema)
