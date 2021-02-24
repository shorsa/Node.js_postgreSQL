import { UserModel } from "..";

export interface RequestEditUserModel extends Omit<UserModel, "password" | "creationDate"> {
}