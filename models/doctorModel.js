const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    // personal
    userId :{
        type:String,
    },
    firstName:{
        type:String,
        required:[true,'Please add a first name']
    },
    lastName:{
        type:String,
        required:[true,'Please add a last name']
    },
    phone:{
        type:String,
        required:[true,'Please add a phone number']
    },
    email:{
        type:String,
        required:[true,'Please add a email']
    },
    website:{
        type:String,
    },
    address:{
        type:String,
        required:[true,'Please add a address']
    },
    
    // professional
    specialization:{
        type:String,
        required:[true,'Please add a specialization']
    },
    experience:{
        type:String,
        required:[true,'Please add a experience']
    },
    feesPerConsulating:{
        type:Number,
        required:[true,'Please add a fees per consulating']
    },
    timings:{
        type:Object,
        required:[true,'Please add work timing']
    }
},{timestamps:true})

const doctorModel = mongoose.model(users,doctorSchema)
module.exports=doctorModel