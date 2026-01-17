import express, { urlencoded } from "express"
import cors from 'cors';
import 'dotenv/config.js';
import connectCloudinary from './config/cloudinary.js';
import cookieParser from 'cookie-parser';

import connectDB  from './config/mongodb.js';

const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const port = 3000;
connectDB();
connectCloudinary();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (Postman, mobile apps)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("Hello")
})
app.listen(port,()=>{
    console.log("live in "+port)
})