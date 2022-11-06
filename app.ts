import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import db from './db'

// Routes
import userRoutes from './src/app/users/routes/user';
import organizationRouter from './src/app/users/routes/organization';

dotenv.config();
const PORT  = process.env.PORT;



const app = express()

app.use(cors())
app.use(bodyParser.json())

// Routes
app.use('/v1/api', userRoutes);
app.use('/v1/api', organizationRouter)

app.listen(PORT,  async () => {
     await db();
    console.log(`server is running ${PORT}`)
})