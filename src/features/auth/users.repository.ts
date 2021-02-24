import * as httpStatus from "http-status";
import { getRepository, Repository } from "typeorm";
import { ErrorResponseHelper } from "../shared/helpers/app-error.helper";
import UserEntity from "./entities/user.entity";
import {
    RequestCreateUserModel,
    RequestEditUserModel,
    UserModel
} from "./models";

export async function create(request: RequestCreateUserModel): Promise<UserModel> {
    try {
        const user: UserModel = await getRepository(UserEntity).save(request);
        return user;
    } catch (error) {
        throw ErrorResponseHelper.error(httpStatus.BAD_REQUEST, error);
    }
}

export async function update({ id, ...rest }: RequestEditUserModel): Promise<void> {
    try {
        const userRepository: Repository<UserEntity> = await getRepository(UserEntity);
        await userRepository.update(id, { ...rest });
    } catch (error) {
        throw ErrorResponseHelper.error(httpStatus.BAD_REQUEST, error);

    }

}
export async function getOneById(id: string): Promise<UserModel> {
    try {
        const userRepository: Repository<UserEntity> = await getRepository(UserEntity);
        const user: UserModel = await userRepository.findOne({ id });
        return user;
    } catch (error) {
        throw ErrorResponseHelper.error(httpStatus.BAD_REQUEST, error);

    }
}

export async function deleteUser(id: string): Promise<void> {
    try {
        const userRepository: Repository<UserEntity> = await getRepository(UserEntity);
        await userRepository.delete({ id });
    } catch (error) {
        throw ErrorResponseHelper.error(httpStatus.BAD_REQUEST, error);
    }
}

