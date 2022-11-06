import { statusCode, statusMessage } from '../enums/status';

export const noContentResponse = (res: any, data: any, message = 'No data found') => {
    return res.status(statusCode.NO_CONTENT).json({
        message: message,
        data: data,
        statusMessage: statusMessage.NO_CONTENT,
        statusCode: statusCode.NO_CONTENT
    })
}

export const successResponse = (res: any, data: any, message = 'Operation Successfully') => {
    return res.status(statusCode.SUCCESS).json({
        message: message,
        data: data,
        statusMessage: statusMessage.SUCCESS,
        statusCode: statusCode.SUCCESS
    })
}


export const successResponseArr = (res: any, data: any, count = {}, message = 'Operation Successfully') => {
    return res.status(statusCode.SUCCESS).json({
        message: message,
        data: data,
        count: count,
        statusMessage: statusMessage.SUCCESS,
        statusCode: statusCode.SUCCESS
    })
}

export const errorResponse = (res: any, error: any, message = 'something went wrong') => {
    return res.status(statusCode.ERROR).json({
        message: message,
        data: error,
        statusMessage: statusMessage.ERROR,
        statusCode: statusCode.ERROR
    })
}



