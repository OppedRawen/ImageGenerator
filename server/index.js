import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
// in nodejs, if we are importing from a file. we have to specify .js
// in react we don't have to do that
import connectDB from './mongodb/connect.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async(req,res)=>{
    res.send('Hello from Dalle API');
});


const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URI);
        app.listen(8080,()=>{
            console.log('Server is running on port 8080');
        })}catch (error) {
            console.log(error);
        }
    } 
   

startServer();