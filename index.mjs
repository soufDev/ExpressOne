const express = require('express');
const bodyParser = require('body-parser');
const config = require('./core/config/config.dev');
const cors = require('cors');
const connection = require('./db/connection');
import User from './models/User';
import userRouter from './routes/User';

connection.dbConnection();
const port = config.serverPort;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', userRouter);


app.listen(port, () => {
    console.log("your are listning to the "+port+" port");
})

