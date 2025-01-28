// const {Schema,model}=require('mongoose')
// const { string } = require('zod')

// const UserSchema=Schema({
//     username:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true,
//         trim:true
//     },
//     phone:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     password:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     isAdmin:{
//         type:Boolean,
//         default:false,
//    }
// },{Timestamps:true})

// const User=model('users',UserSchema)

// module.exports = User

const mongoose =require('mongoose')


const userSchema =new mongoose.Schema({

     username:{
        type:String,
        require:[true,'username is required']
     },
     email:{
        type:String,
        require:[true,'email is required']
     },
     password:{
        type:String,
        require:[true,'password is required']
     },
     post:[
        {
         type:mongoose.Types.ObjectId,
         ref:'posts',
         require:[true,'Post Id is Required']
        }
    ]
},{timestamps:true})

const userModel=mongoose.model('users',userSchema)

module.exports = userModel