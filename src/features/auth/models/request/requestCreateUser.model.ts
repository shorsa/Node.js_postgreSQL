import { UserModel } from "..";

export interface RequestCreateUserModel extends Omit<UserModel, "id" | "creationDate"> {
}