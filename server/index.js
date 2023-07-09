import express from "express";
import router from "./routes/route.js";
import cors from 'cors';
import DBconnection from "./database/db.js";
import dotenv from 'dotenv';

dotenv.config();

const app=express();

app.use(cors());
app.use('/',router);

const PORT= process.env.PORT || 8000;

DBconnection();

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));

