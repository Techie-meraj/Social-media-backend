// const bcrypt = require('bcrypt')

// const hashpassword=async(password)=>{
//     try{
//        let salt=10;
//        let hashedpassword = await bcrypt.hash(password,salt);
//        return hashedpassword
//     }catch(error){
//         console.log(error);

        
//     }

// }
// const comparepassword=async(password,hashedpassword)=>{
//     try{
//        let salt=10;
//        let comparedpassword = await bcrypt.compare(password,hashedpassword);
//        return comparedpassword
//     }catch(error){
//         console.log(error);

        
//     }

// }
// module.exports={hashpassword,comparepassword}