import { BaseResponseModel } from "../../../shared/models";
import { UserModel } from "../user.model";

export interface ResponseUserModel extends Omit<UserModel, "password"> {

}