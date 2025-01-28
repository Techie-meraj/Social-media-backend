const express=require('express')
const { getAllpost, createpost, updatepost, deletepost, getpost, getPostsByUserId } = require('../Controllers/postController')
const postrouter=express.Router()


postrouter.get('/allpost',getAllpost)
postrouter.post('/createpost',createpost)
postrouter.put('/updatepost/:id',updatepost)
postrouter.delete('/deletepost/:id',deletepost)
postrouter.get('/getpost/:id',getpost)
postrouter.get('/getposts/:id', getPostsByUserId); // `/id` is the userId


module.exports=postrouter

