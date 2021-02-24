import { createConnection } from 'typeorm';
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import UserEntity from "../features/auth/entities/user.entity";
import CONFIG from "./config";


const typeOrmConfig: PostgresConnectionOptions = {
    type: "postgres",
    username: CONFIG.USERNAME,
    host: CONFIG.DB_HOST,
    database: CONFIG.DATABASE_NAME,
    password: CONFIG.PASSWORD,
    port: CONFIG.DB_PORT,
    synchronize: true,
    logging: false,
    entities: [
        UserEntity
    ]
};

export default (async () => {
    try {
        const conn = await createConnection(typeOrmConfig);
        console.log("DB connection OK");
    } catch (e) {
        console.log(e);
        console.log("DB connection bad");
        process.exit()
    }
})();