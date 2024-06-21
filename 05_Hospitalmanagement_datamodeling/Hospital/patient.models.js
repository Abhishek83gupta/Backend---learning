const mongoose =require('mongoose')


const patientSchema = new mongoose.Schema({
    name:{
        typeof:String,
        required:trusted,
       },
       bloodGroup:{
        type:String,
        required:trusted
       },
       gender:{
         type:String,
         enum:["M","F","O"],
         required:true
       },
       admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
       }
},{timestamps:true})



export const Patient = mongoose.model("Patient",patientSchema)