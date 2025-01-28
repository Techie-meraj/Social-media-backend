const {z} =require('zod')

const signUpschema =z.object({

    username:z.string({required_error:"Username is required"}).min(3,"Username must have at least three characters"),       
    email:z.string({required_error:"Email is required"}).email("Invalid email").min(13,"Email must have at least 13 characters"),       
    phone:z.string({required_error:"Phone no. is required"}).length(10,"Invalid phone number"),       
    password:z.string({required_error:"Password required"}).min(4,"Password must have at least four characters")       

})
const loginschema =z.object({
   email:z.string({required_error:"Email is required"}).email("Invalid email").min(13,"Email must have at least 13 characters"),       
   password:z.string({required_error:"Password required"}).min(4,"Password must have at least four characters")       
})

const Signupvalidation =async(req,res,next)=>{
  try{
    const passedBody =await signUpschema.parseAsync(req.body)
    req.body=passedBody;
    next()
  }catch(error){
    console.log(error.errors[0].message);
    return res.status(400).send({msg:error.errors[0].message,success:false})
  }

}
const loginvalidation =async(req,res,next)=>{
  try{
    const passedBody =await loginschema.parseAsync(req.body)
    req.body=passedBody;
    next()
  }catch(error){
    console.log(error.errors[0].message);
    return res.status(400).send({msg:error.errors[0].message,success:false})
  }

}

module.exports = {Signupvalidation,loginvalidation}