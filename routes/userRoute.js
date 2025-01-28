const express=require('express')
const { getAllUsers, loginuser, createuser } = require('../Controllers/userController')
const userRouter=express.Router()


userRouter.get('/alluser',getAllUsers);
userRouter.post('/login',loginuser)
userRouter.post('/create',createuser)


module.exports=userRouter
