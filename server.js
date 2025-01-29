// require('dotenv').config()
// const express=require('express')
// const connection = require('./Utils/dbConfig')
// const cors =require('cors')
// const Router = require('./routes/Authroutes')
// const PORT =process.env.PORT

// const app=express()
// //Middlewares
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())
// app.use(cors())

// app.use('/users',Router)

// connection()
// .then(()=>{
//     app.listen(PORT,()=>{
//         console.log(`Server has started on ${PORT}`);
//     })
//     console.log("Database connected successfully");
// })

require('dotenv').config()
const express=require('express')
const connection = require('./Utils/dbConfig')
const userRouter = require('./routes/userRoute')
const postrouter = require('./routes/postRoutes')
const cors=require('cors')
const PORT=process.env.PORT


const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "https://social-media-frontend-fawn.vercel.app", // Your deployed frontend
  credentials: true
}));


app.use('/user',userRouter)
app.use('/post',postrouter)


connection()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Started Successfully on ${PORT}`);
        })
      console.log(`Database Connected Successfully`);
        
})







