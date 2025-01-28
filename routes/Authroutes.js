// const express=require('express')
// const { registerUser ,getallUsers,loginUser } = require('../Controllers/Authcontroller')
// const { Signupvalidation, loginvalidation } = require('../Middlewares/Validatemiddleware')
// const { tokenVerification, checkAdmin } = require('../Middlewares/Authmiddleware')

// const Router =express.Router()

// Router.route('/register').post(Signupvalidation,registerUser)
// Router.route('/getalluser').get(getallUsers)
// Router.route('/login').post(loginvalidation,loginUser)
// Router.route('/getname').get(tokenVerification,checkAdmin,(req,res)=>{
//     return res.status(200).send({msg:"Hello Admin"})
// })



// module.exports = Router