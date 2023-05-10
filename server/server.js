import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
const PORT=3001;
const app=express();
app.use(cors);
await mongoose.connect("mongodb+srv://anurag1233:anurag1233@cluster0.rghtjqy.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log("MOngoDB connetion successful"))
.catch((err)=>console.log(err));

app.get('/',(req,res)=>{
   res.send("Hello World")
});  
app.listen(PORT,()=>{
    console.log("server running at http://localhost:3001")
});
