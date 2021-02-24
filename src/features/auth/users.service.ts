import * as httpStatus from "http-status";
import { ErrorResponseHelper } from "../shared/helpers/app-error.helper";
import { BaseResponseModel } from "../shared/models";
import { RequestCreateUserModel, RequestEditUserModel, ResponseUserModel, UserModel } from "./models";
import { UserCreateValidationSchema } from "./schemas/userCreate.schema";
import * as usersRepository from "./users.repository";

export async function create(request: RequestCreateUserModel): Promise<ResponseUserModel> {
    const isValid: boolean = UserCreateValidationSchema.isValidSync(request)

    if (!isValid) {

    }

    const result: UserModel = await usersRepository.create(request);
    const { password, ...user } = result;
    return user;
}


export async function update(request: RequestEditUserModel): Promise<BaseResponseModel> {
    await usersRepository.update(request);

    return { ok: true, message: "User updated" };
}

export async function getOne(id: string): Promise<ResponseUserModel | BaseResponseModel> {
    const result: UserModel = await usersRepository.getOneById(id);

    if (!result) {
        return { ok: false, message: "User not found" }
    }

    return { ok: true, ...result };
}

export async function deleteUser(id: string): Promise<BaseResponseModel> {
    await usersRepository.deleteUser(id);

    return { ok: true, message: "User deleted" };

}

