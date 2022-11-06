
import { DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
import User,{ UserDocument } from "../models/user";


export const createUserService = (input: DocumentDefinition<UserDocument>) =>{
      return User.create(input)
}


export const findUserService = (query: FilterQuery<UserDocument>, options: QueryOptions = { learn: true}) =>{
    return User.find(query, {}, options)
}

export const findAndUpdateUserService = (query: FilterQuery<UserDocument>, update: UpdateQuery<UserDocument>, options: QueryOptions = {learn: true}) =>{
    return User.findOneAndUpdate(query, update, options)
} 


export const deleteUserService = (query: FilterQuery<UserDocument>) => {
    return User.deleteOne(query)
}