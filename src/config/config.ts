import * as dotenv from "dotenv";

dotenv.config();

export default {
    APP: process.env.APP || "dev",
    PORT: process.env.PORT || "3000",
    TYPE: process.env.TYPE || "postgres",

    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: 5433,
    DATABASE_NAME: process.env.DATABASE_NAME || "example" ,
    // DB_PORT: process.env.DB_PORT || 5433,

    // USERNAME: process.env.USERNAME || "postgres",
    USERNAME: "postgres",
    PASSWORD: process.env.PASSWORD || "admin",

    JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || "jwt_key",
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
    SALT_ROUNDS: process.env.SALT_ROUNDS || 10
}