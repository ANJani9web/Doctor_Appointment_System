const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name']
    },
    email:{
        type:String,    
        required:[true,'Please add a email']
    },
    password:{
        type:String,
        required:[true,'Please add a password']
     },
     isAdmin:{
            type:Boolean,
            default:false,
     },
     isDoctor:{
        type:Boolean,
        default:false,
     },
     notification:{
        type:Array,
        default:[],
     },
     seennotification:{
        type:Array,
        default:[],
     }
     
    }
)

const userModel = mongoose.model('users',userSchema)

module.exports = userModel;