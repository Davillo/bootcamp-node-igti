import express from "express";
import accountsRouter from './routes/accounts.js';
import winston from 'winston';
import {promises as fs} from 'fs';
import cors from 'cors';

const {combine,timestamp, label, printf} = winston.format;

const winstonFormat = printf(({level, message, label ,timestamp}) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

global.fileName = 'accounts.json';
global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: 'my-bank-api.log'}),
    ],
    format: combine(
        label({label: 'my-bank-api'}),
        timestamp(),
        winstonFormat
    )
});


const app = express();

app.use(express.json());
app.use(cors());

app.use('/accounts', accountsRouter);

app.listen(3000, async () => {
    try {
        await fs.readFile(global.fileName);
        logger.info('api started');
    }catch (err){
        const initialJson = {
            nextId: 1,
            accounts: [],
        };

        fs.writeFile(global.fileName, JSON.stringify(initialJson)).then(() => {
            logger.info('Api started and file');
        })
        .catch(err => 
            logger.error(err)
        );
    }
});