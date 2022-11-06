import { Schema, model, Document } from "mongoose";

export interface UserDocument extends Document {
    firstName: string,
    lastName : string,
    email: string,
    Phone: string,
    password: string,
    userStatus: string
}

interface User {
    firstName: string,
    lastName : string,
    email: string,
    Phone: string,
    password: string,
    userStatus: string
}


const UserSchema = new Schema<any>({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userStatus: {
        type: String,
        required: true
    }

}, { versionKey: false})

const UserModels = model<User>('User', UserSchema) 

export default UserModels;