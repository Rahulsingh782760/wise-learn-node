import { validate } from 'class-validator'
import { Request, Response } from "express";
import { successResponse, errorResponse, noContentResponse, successResponseArr } from '../../../utils/response-obj';
import { createUserService, findUserService, findAndUpdateUserService, deleteUserService } from '../services/user';
import { createUserValidator, updateUserValidator, delteUserValidtor } from "../validator/user";

const users = async (req: Request, res: Response) => {
    const totalDataCount = await findUserService({}).count();
    await findUserService({}).then((data) => {
        if (data.length == 0) {
            noContentResponse(res, data, 'No user found')
        } else {
            successResponseArr(res, data, {
                total: totalDataCount,

            }, 'User fetch Successfully');
        }
    }).catch((error) => {
        errorResponse(res, error)
    })

}

const userById = () => {
    console.log('User By Id')
}


const createUser = async (req: Request, res: Response) => {
    const { firstName, lastName, email, Phone, password, userStatus } = req.body;
    const createUserValidatorFn = new createUserValidator();
    createUserValidatorFn.firstName = firstName;
    createUserValidatorFn.lastName = lastName;
    createUserValidatorFn.email = email;
    createUserValidatorFn.Phone = Phone;
    createUserValidatorFn.password = password;
    createUserValidatorFn.userStatus = userStatus;

    validate(createUserValidatorFn).then(async (error) => {
        if (error.length > 0) {
            errorResponse(res, error);
        }
        else {
            await createUserService({
                firstName: firstName,
                lastName: lastName,
                email: email,
                Phone: Phone,
                password: password,
                userStatus: userStatus
            }).then((user) => {
                if (!user) {
                    noContentResponse(res, user, 'No user created');
                } else {
                    successResponse(res, user, 'User Create Successfully')
                }
            }).catch((error) => {
                errorResponse(res, error)
            })


        }
    })
    console.log('createUser')
}


const updateUser = async (req: Request, res: Response) => {
    const { userId, firstName, lastName, email, Phone, password, userStatus } = req.body;
    const updateUserValidatorFn = new updateUserValidator();
    updateUserValidatorFn.userId = userId;
    updateUserValidatorFn.firstName = firstName;
    updateUserValidatorFn.lastName = lastName;
    updateUserValidatorFn.email = email;
    updateUserValidatorFn.Phone = Phone;
    updateUserValidatorFn.password = password;
    updateUserValidatorFn.userStatus = userStatus;

    validate(updateUserValidatorFn).then(async (error) => {
        if (error.length > 0) {
            errorResponse(res, error);
        }
        else {
            await findAndUpdateUserService({
                _id: userId

            },
                {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    Phone: Phone,
                    password: password,
                    userStatus: userStatus
                }).then((user) => {
                    if (!user) {
                        noContentResponse(res, user, 'No user updated');
                    } else {
                        successResponse(res, user, 'User Updated Successfully')
                    }
                }).catch((error) => {
                    errorResponse(res, error)
                })


        }
    })
    console.log('createUser')
}


const delteUser = async (req: Request, res: Response) => {
    const { userId } = req.body;
    const delteUserValidtorFn = new delteUserValidtor();
    delteUserValidtorFn.userId = userId;
    validate(delteUserValidtorFn).then(async (error: any) => {
        if (error.length > 0) {
            errorResponse(res, error);
        } else {
            await deleteUserService({
                _id: userId
            }).then((data) => {
                if (data.deletedCount == 0) {
                    noContentResponse(res, data, 'No user deleted');
                } else {
                    successResponse(res, data, 'User Deleted Successfully')
                }
            }).catch((error) => {
                errorResponse(res, error)
            })

        }
    })

}


export { createUser, delteUser, updateUser, users, userById }
