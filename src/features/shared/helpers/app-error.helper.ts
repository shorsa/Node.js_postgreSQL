
import { Response } from "express";
import * as httpStatus from "http-status";

export class ErrorResponseHelper extends Error {
    statusCode: number;
    isSuccessful?: boolean;
    message: string;
    constructor(statusCode: number, message: string, isSuccessful?: boolean) {
        super();
        this.isSuccessful = isSuccessful;
        this.statusCode = statusCode;
        this.message = message;
    }
    public static error(statusCode: number, message: string): ErrorResponseHelper {
        return new ErrorResponseHelper(statusCode, message, false);
    }
    public static internalServerError(message: string): ErrorResponseHelper {
        return new ErrorResponseHelper(500, message, false);
    }
}

export function errorHandler(err: ErrorResponseHelper | Error, res: Response): void {
    if (err instanceof ErrorResponseHelper) {
        res.status(err.statusCode).json({ statusCode: err.statusCode, message: err.message });
        return;
    }
    res.status(httpStatus.BAD_REQUEST).json({ statusCode: httpStatus.BAD_REQUEST, message: err.message });

}