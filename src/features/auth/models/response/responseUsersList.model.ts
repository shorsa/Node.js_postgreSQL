import { BaseResponseModel } from "../../../shared/models";
import { UserModel } from "../user.model";

export interface ResponseUsersListModel extends BaseResponseModel {
    total: number;
    items: UserModel[];
}