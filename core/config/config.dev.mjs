let Config = {
    dbHost : process.env.dbHost || 'localhost',
    dbPort : process.env.dbPort || '27017',
    dbName : process.env.dbName || 'testExpress',
    serverPort : process.env.serverPort || 8080
};

export default Config;