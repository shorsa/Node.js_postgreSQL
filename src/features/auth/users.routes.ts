import { Router } from "express";
import { ApiEndpointsConstants } from "../../config/api-endpoints.constants";
import * as usersController from "./users.controller";

export const usersRouter: Router = Router();

usersRouter.delete(ApiEndpointsConstants.USER_DELETE, usersController.deleteUser);
usersRouter.post(ApiEndpointsConstants.USER_CREATE, usersController.create);
usersRouter.put(ApiEndpointsConstants.USER_UPDATE, usersController.update);
usersRouter.get(ApiEndpointsConstants.USER_GET_USER, usersController.getOne);