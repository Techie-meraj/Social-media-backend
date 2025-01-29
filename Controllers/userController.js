// const { hashpassword } = require("../Helper/Passhashing");
// const User = require("../Models/usermodel")
// const jwt = require('jsonwebtoken')


// const registerUser=async(req,res)=>{
//     try{
//         const {username,email,phone,password} = req.body;
//         const userExists =await User.findOne({email})
//         if(userExists){
//             return res.status(400).send({msg:"User Already Exist",success:false})
//         }
//         let hashedpassword =await hashpassword(password)
//         const newUser = await User.create({username,email,phone,password:hashedpassword})
//         return res.status(201).send({msg:"User created Successfully",success:true,newUser})
//     }catch(error){
//         console.log(error)
//         return res.status(500).send({msg:error,success:false})
//     }
// }
// const loginUser=async(req,res)=>{
//     try{
//         const {email,password} = req.body;
//         const userExists =await User.findOne({email})
//         if(!userExists){
//             return res.status(400).send({msg:"User Not Exist,Sign Up Please",success:false})
//         }
//         if(userExists.password!=password){
//             return res.status(400).send({msg:"Password Incorrect",success:false})
//         } 
//         let generateToken =jwt.sign({id:userExists._id},process.env.SECRET_KEY,{expiresIn:'1h'})
//         return res.status(200).send({msg:"User login successfully",success:true,user:{
//             username:userExists.username,
//             phone:userExists.phone,
//             email:userExists.email,
//             isAdmin:userExists.isAdmin},token:generateToken})
//     }catch(error){
//         console.log(error)
//         return res.status(500).send({msg:error,success:false})
//     }
// }

// const getallUsers=async(req,res)=>{
//       return res.status(200).send(User.find())
//         }

// module.exports ={registerUser,getallUsers,loginUser}

const userModel = require("../Models/usermodel")
// const bcrypt = require('bcrypt')

exports.getAllUsers = async (req, res) => {
    try {
        const allusers = await userModel.find()
        return res.status(200).send({ message: 'All users get successfully', success: true, allusers, usernumuber: allusers.length })

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'Error in getting Users', success: false, error })
    }

}

exports.createuser = async(req, res) => {
    const {username, email, password} = req.body

    if (!username) {
        return res.status(400).send({ message: 'username is required', success: false })
    }
    if (!email) {
        return res.status(400).send({ message: 'email is required', success: false })
    }
    if (!password) {
        return res.status(400).send({ message: 'password is required', success: false })
    }
    // if(!post){
    //     return res.status(400).send({message:'Post Id is required',success:false})
    // }

    // let hashedpassword

    // try {
    //     const salt = await bcrypt.genSalt(10)
    //     hashedpassword = await bcrypt.hash(password, salt)
    // } catch (error) {
    //     return res.status(500).send({ message: 'Error in hashing password', success: false })
    // }

    try {
        const existinguser = await userModel.findOne({ email })
        if (existinguser) {
            return res.status(400).send({ message: 'User already exists', success: false })
        }
        const user = await userModel.create({
            username, email, password ,post:[]
        })
        console.log(req.body);
        
       return res.status(200).send({ message: 'User created successfully', success: true, user })
    } catch (error) {
        console.log(error);
    }


}

exports.loginuser = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email) {
            return res.status(400).send({ message: 'email is required', success: false })
        }
        if (!password) {
            return res.status(400).send({ message: 'password is required', success: false })
        }
        const user = await userModel.findOne({email})
        if (!user) {
            return res.status(400).send({ message: 'User not exists', success: false })
        }
        console.log(user)
        
        // const matchpassword = await bcrypt.compare(password, user.password)
        // if (!matchpassword) {
        //     return res.status(400).send({ message: 'Invalid password', success: false })
        // }

        return res.status(200).send({ message: 'User loggedIn Successfully', success: true ,user})
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: 'Error in login', success: false, error })
    }
}
