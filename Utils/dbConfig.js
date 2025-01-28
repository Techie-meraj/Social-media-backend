// const mongoose=require('mongoose')
// const URL =process.env.URI
// const connections =async()=>{
//     try{
//         await mongoose.connect(URL)
//     }catch(error){
//      console.log(error);
//      process.exit(1)
//      }
// }
// module.exports = connections

const mongoose=require('mongoose')
const MONGO =process.env.MONGO_KEY
const connection =async()=>{
    try{
      await mongoose.connect(MONGO)
      console.log('MongoDB Connected..')

    }catch(error){
     console.log(error);
     process.exit(1)     
     }
}

module.exports = connection