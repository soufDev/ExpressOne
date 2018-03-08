import Sequelize from 'sequelize';
import Config from '../core/config/config.dev';

export const sequelize = new Sequelize(Config.dbName, 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, 
        idle: 10000
    }
});

export const dbConnection = () => {
    sequelize.authenticate()
    .then(() => { console.log("connection has been established")})
    .catch(err => console.error("Unable to connect to the database.", err));
}