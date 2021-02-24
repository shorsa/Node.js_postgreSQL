import { UserRole } from "../enums/user-role.enum";

export interface UserModel {
    id: string
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    creationDate: Date;
    role: UserRole;
}