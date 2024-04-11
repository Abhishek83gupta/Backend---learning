const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    content:{
        type:string,
        required:true
    },

    complete: {
        type :Boolean,
        default :false
    },

    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    subTodos:[
    { 
      type:mongoose.Schema.Types.ObjectId,
      ref:"SubTodo"
    },  // Array of subTodo 
]


},{timeStamps:True})


export const Todo = mongoose.model('Todo',todoSchema)