import mongoose from "mongoose"
import dotenv from 'dotenv';

dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const DBconnection=async()=>{
    const MONGODB_URI=`mongodb://${USERNAME}:${PASSWORD}@ac-c5equvn-shard-00-00.xzyrwdz.mongodb.net:27017,ac-c5equvn-shard-00-01.xzyrwdz.mongodb.net:27017,ac-c5equvn-shard-00-02.xzyrwdz.mongodb.net:27017/?ssl=true&replicaSet=atlas-14i8z8-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(MONGODB_URI,{useNewUrlParser:true})
        console.log('Database connected succesfully')
    }catch(error){
        console.error('error while connecting with the database',error.message)
    }
}

export default DBconnection;