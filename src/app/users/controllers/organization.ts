import { validate } from 'class-validator'
import { Request, Response } from "express";
import { successResponse, errorResponse, noContentResponse, successResponseArr } from '../../../utils/response-obj';
import { createOrganizationService, findOrganizationService, findAndUpdateOrganizationService, deleteOrganizationService } from '../services/organization';
import { createOrganizationValidator, updateOrganizationValidator, deleteOrganizationValidtor } from "../validator/organization";

const Organizations = async (req: Request, res: Response) => {
    const totalDataCount = await findOrganizationService({}).count();
    await findOrganizationService({}).then((data) => {
        if (data.length == 0) {
            noContentResponse(res, data, 'No Organization found')
        } else {
            successResponseArr(res, data, {
                total: totalDataCount,

            }, 'Organization fetch Successfully');
        }
    }).catch((error) => {
        errorResponse(res, error)
    })

    console.log('Organization success')
}

const OrganizationById = async(req: Request, res:Response) => {
    // const totalDataCount = await findOrganizationService({}).count();
    console.log(req.params.orgId)
    await findOrganizationService({orgId: req.params.orgId}).then(async(data) => {
        if (data.length == 0) {
            noContentResponse(res, data, 'No Organization found')
        } else {
            successResponseArr(res, data, 'Organization successfully')
             
        }
    }).catch((error) => {
        errorResponse(res, error)
    })

    console.log('Organization success')
}


const createOrganization = async (req: Request, res: Response) => {
    const { orgName, orgAddress, orgAstablish } = req.body;
    const createOrganizationValidatorFn = new createOrganizationValidator();
    createOrganizationValidatorFn.orgName = orgName;
    createOrganizationValidatorFn.orgAddress = orgAddress;
    createOrganizationValidatorFn.orgAstablish = orgAstablish;



    validate(createOrganizationValidatorFn).then(async (error) => {
        if (error.length > 0) {
            errorResponse(res, error);
        }
        else {
            await createOrganizationService({
                orgName: orgName,
                orgAddress: orgAddress,
                orgAstablish: orgAstablish,

            }).then((organization) => {
                if (!organization) {
                    noContentResponse(res, organization, 'No Organization created');
                } else {
                    successResponse(res, organization, 'Organization Create Successfully')
                }
            }).catch((error) => {
                errorResponse(res, error)
            })


        }
    })
    console.log('create-Organization')
}


const updateOrganization = async (req: Request, res: Response) => {
    const { orgName, orgAddress, orgAstablish, orgId } = req.body;
    const updateOrganizationValidatorFn = new updateOrganizationValidator();
    updateOrganizationValidatorFn.orgName = orgName;
    updateOrganizationValidatorFn.orgAddress = orgAddress;
    updateOrganizationValidatorFn.orgAstablish = orgAstablish;
    updateOrganizationValidatorFn.orgId = orgId;



    validate(updateOrganizationValidatorFn).then(async (error) => {
        if (error.length > 0) {
            errorResponse(res, error);
        }
        else {
            await findAndUpdateOrganizationService({
             _id: orgId
            },

                {
                    orgName: orgName,
                    orgAddress: orgAddress,
                    orgAstablish: orgAstablish,
                    
                }).then((organization) => {
                    if (!organization) {
                        noContentResponse(res, organization, 'No Organization updated');
                    } else {
                        successResponse(res, organization, 'Organization update Successfully')
                    }
                }).catch((error) => {
                    errorResponse(res, error)
                })


        }
    })
    console.log('Update-Organization')
}



const deleteOrganization = async (req: Request, res: Response) => {
    const { orgId } = req.body;
    const deleteOrganizationValidtorFn = new deleteOrganizationValidtor();
    deleteOrganizationValidtorFn.orgId = orgId;
    validate(deleteOrganizationValidtorFn).then(async (error: any) => {
        if (error.length > 0) {
            errorResponse(res, error);
        } else {
            await deleteOrganizationService({
                _id: orgId
            }).then((data) => {
                if (data.deletedCount == 0) {
                    noContentResponse(res, data, 'No Organization deleted');
                } else {
                    successResponse(res, data, 'Organization Deleted Successfully')
                }
            }).catch((error) => {
                errorResponse(res, error)
            })

        }
    })

    console.log('delete-Organization')

}


export { createOrganization, deleteOrganization, updateOrganization, Organizations, OrganizationById }
