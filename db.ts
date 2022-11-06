import {connect} from "mongoose";
import dotenv from 'dotenv';


dotenv.config();
const DBurl: any = process.env.URL;

const db = () => {
 connect(DBurl).then(() =>{
        console.log('Database Connected')
    }).catch((error) =>{
        console.log('Error while Connecting to the Database', error)
    })
}

export default db;