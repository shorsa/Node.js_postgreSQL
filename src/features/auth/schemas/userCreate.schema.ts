import { mixed, object, string } from "yup";
import { UserRole } from "../enums";
import { RequestCreateUserModel } from "../models";

export const UserCreateValidationSchema = object().shape<RequestCreateUserModel>(
    {
        firstName: string().required().min(5).max(20),
        lastName: string().required().min(5).max(20),
        email: string().required().email('Invalid email address'),
        password: string().required(),
        role: mixed().oneOf([UserRole.Admin, UserRole.User])
    }
);