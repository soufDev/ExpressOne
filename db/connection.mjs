import Sequelize from 'sequelize';
import Config from '../core/config/config.dev';

const sequelize = new Sequelize(Config.dbName, 'root', 'root', {
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

const dbConnection = () => {
    sequelize.authenticate()
    .then(() => { console.log("connection has been established")})
    .catch(err => console.error("Unable to connect to the database.", err));
}

module.exports = {
    dbConnection: dbConnection,
    sequelize: sequelize
}