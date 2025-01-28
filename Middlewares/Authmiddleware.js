const jwt =require('jsonwebtoken')
const User = require('../Models/usermodel')

const tokenVerification=async(req,res,next)=>{
    try{
        const decode = await jwt.decode(req.headers.authorization,process.env.SECRET_KEY)
        if(!decode){
            return res.status(400).send({msg:"Invalid token"})
        }
        req.id = decode.id
        next()
        
         
    }catch(error){
        return res.status(400).send({msg:error})
    }
}

const checkAdmin=async(req,res,next)=>{
    try{
        const id=req.id
        const user =await User.findById(id)
        if(user.isAdmin){
            next()
        }  
        return res.status(400).send({msg:"Unauthorised User"})
    }catch(error){
        return res.status(500).send({msg:error})
    }
}
module.exports = {tokenVerification,checkAdmin}