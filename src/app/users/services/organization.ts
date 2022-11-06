
import { DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
import Organization,{ OrganizationDocument } from "../models/organization";


export const createOrganizationService = (input: DocumentDefinition<OrganizationDocument>) =>{
      return Organization.create(input)
}


export const findOrganizationService = (query: FilterQuery<OrganizationDocument>, options: QueryOptions = { learn: true}) =>{
    return Organization.find(query, {}, options)
}

export const findAndUpdateOrganizationService = (query: FilterQuery<OrganizationDocument>, update: UpdateQuery<OrganizationDocument>, options: QueryOptions = {learn: true}) =>{
    return Organization.findOneAndUpdate(query, update, options)
} 


export const deleteOrganizationService = (query: FilterQuery<OrganizationDocument>) => {
    return Organization.deleteOne(query)
}