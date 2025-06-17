const express=require('express');
const app=express()
const mongoose=require('mongoose');
const cors=require('cors');
const userRoutes=require('./routes/userRoutes')
const bodyParser=require('body-parser');
require('dotenv').config();

// 'mongodb://localhost:27017/e-commerce'
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected")
    app.listen(process.env.PORT,()=>{
    console.log('The server is running on',process.env.PORT)
})
})
.catch((err)=>{
    console.error(err)
})

app.use(cors())
app.use(bodyParser.json())
app.use('/api/user',userRoutes)


// const port=5000;

