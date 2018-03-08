import path from 'path';

class Config {
    constructor() {
        this.dbHost = process.env.dbHost || 'localhost';
        this.dbPort = process.env.dbPort || '27017';
        this.dbName = process.env.dbName || 'testExpress';
        this.serverPort = process.env.serverPort || 8080;
    }
}

module.exports = Config;
