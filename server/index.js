import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
// in nodejs, if we are importing from a file. we have to specify .js
// in react we don't have to do that
import connectDB from './mongodb/connect.js';
import dalleRoutes from './routes/dalleRoutes.js';
import postRoutes from './routes/postRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// if (process.env.NODE_ENV === 'production') {
//     // Serve any static files
//     app.use(express.static(path.join(__dirname, '../client/dist')));
  
//     // Handle React routing, return all requests to React app
//     app.get('*', function(req, res) {
//       res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
//     });
//   }

app.use('/api/v1/posts',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);
app.get('/', async(req,res)=>{
    res.send('Hello from Dalle API');
});



const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        console.log(process.env.NODE_ENV);
        app.listen(process.env.PORT ||8080,()=>{
            console.log('Server is running on port 8080');
        })}catch (error) {
            console.log(error);
        }
    } 
   

startServer();