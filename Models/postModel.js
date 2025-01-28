const mongoose =require('mongoose')


const postSchema=new mongoose.Schema({
    title:{
      type:String,
      require:[true,'title is required'] 
    },
    description:{
     type:String,
     require:[true,'description is required']
    },
    image:{
      type:String,
      require:[true,'Image is required']  
    },
    user:{
      type:mongoose.Types.ObjectId,
      ref:'users',
      require:[true,'User Id is required']
    }
    
},{timestamps:true})

const postModel =mongoose.model('posts',postSchema)

module.exports = postModel