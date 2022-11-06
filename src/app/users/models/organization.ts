import { Schema, model, Document } from "mongoose";

export interface OrganizationDocument extends Document {
    orgName: string,
    orgAddress : string,
    orgAstablish: string,

}

interface Organization {
    orgName: string,
    orgAddress : string,
    orgAstablish: string,
}


const OrganizationSchema = new Schema<any>({
    orgName: {
        type: String,
        required: true
    },

    orgAddress: {
        type: String,
        required: true
    },
    orgAstablish: {
        type: String,
        required: true
    }
   

}, { versionKey: false})

const OrganizationModels = model<Organization>('Organization', OrganizationSchema) 

export default OrganizationModels;