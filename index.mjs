import express from 'express';
import bodyParser from 'body-parser';
import Config from './core/config/config.dev';
import cors from 'cors';
import { dbConnection } from './db/connection';
import User from './models/User';
import userRouter from './routes/User';

dbConnection();
const port = Config.serverPort;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', userRouter);


app.listen(port, () => {
    console.log("your are listning to the "+port+" port");
})

