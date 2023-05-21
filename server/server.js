import express from 'express'
import connect from './database.js/mongodb.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import TrasactionsApi from "./routes/TransactionApi.js";
import AuthApi from "./routes/AuthApi.js";
import passport from 'passport';
import passportConfig from './config/passport.js';
import * as dotenv from 'dotenv';
dotenv.config();

const PORT=3001;
const app=express();


app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Include PATCH method
  }));

app.use(bodyParser.json());
app.use('/auth',AuthApi);
app.use(passport.initialize());
passportConfig(passport);
app.get("/",(req,res)=>{
    res.send("Hello World");
 });  

app.use("/transaction",TrasactionsApi);

await connect();

app.listen(PORT,()=>{
    console.log("server running at http://localhost:3001")
});
  