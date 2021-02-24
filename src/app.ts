import * as bodyParser from 'body-parser';
import * as cors from "cors";
import * as express from "express";
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { ApiEndpointsConstants } from './config/api-endpoints.constants';
import "./config/db";
import { usersRouter } from './features/auth/users.routes';

class App {
    public express: express.Application;
    constructor() {
        this.express = express();
        this.setMiddleware();
        this.setRoutes();
        this.catchErrors();
    }

    private setMiddleware(): void {
        this.express.use(cors());
        this.express.use(morgan("dev"));
        this.express.use(bodyParser.json({ limit: '10mb' }));
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(helmet());
    }

    private setRoutes(): void {
        const getUrl = (route: string): string => ApiEndpointsConstants.API + route;

        this.express.use(getUrl(ApiEndpointsConstants.FEATURES_USERS), usersRouter)
    }

    private catchErrors(): void {
    }
}

export default new App().express;