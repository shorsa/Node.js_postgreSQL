import { Request, Response } from "express";
import { errorHandler } from "../shared/helpers/app-error.helper";
import { BaseResponseModel } from "../shared/models";
import { ResponseUserModel } from "./models";
import * as usersService from "./users.service";

export function create(req: Request, res: Response) {
    usersService.create(req.body)
        .then((result: ResponseUserModel) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
}

export function update(req: Request, res: Response) {
    usersService.update(req.body)
        .then((result: BaseResponseModel) => {
            res.send(result);
        })
        .catch((err) => {
            errorHandler(err, res)
        });
}

export function deleteUser(req: Request, res: Response) {
    usersService.deleteUser(String(req.query.id))
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            errorHandler(err, res)
        });
}

export function getOne(req: Request, res: Response) {
    usersService.getOne(String(req.query.id))
        .then((result: ResponseUserModel) => {
            res.send(result);
        })
        .catch((err) => {
            errorHandler(err, res)
        });
}