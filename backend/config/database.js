import dotenv from 'dotenv';
import { Sequelize } from "sequelize";
dotenv.config();

const hostname = process.env.DB_HOSTNAME
const database = process.env.DB_NAME
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const port = process.env.DB_PORT

const db = new Sequelize(database,username,password,{
    host: hostname,
    port: port,
    dialect:'mysql'
});

export default db