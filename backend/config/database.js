import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db','root','',{
    host:'localhost',
    port: 3333,
    dialect:'mysql'
});

export default db