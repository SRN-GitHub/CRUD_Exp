import express from 'express';
import dotenv from 'dotenv';
import connectTodb from './database/db.js';
import userRouter from './routes/user.routes.js';

dotenv.config()   //* Configuring Environment file. 

const app = express();    //* Calling The Express
app.use(express.json())  //* Convert To JSON File.

app.use('/api/users',userRouter)  //* MiddleWare Router



const Server = async ()=>{
    try {
        //* CREATING SERVER 
        await app.listen(process.env.PORT, ()=>console.log(`Server is running on Port ${process.env.PORT}`))  // TO RUN SERVER !!
        //* DATABASE CONNECTION
        connectTodb(process.env.MONGO_DB)  // TO CONNECT DATABASE !
        console.log('Database Connected Successfully') 
    } 
    catch (error) {
        console.log(error)
    }
}
Server() 