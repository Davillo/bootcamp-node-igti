import express from 'express';
import winston from 'winston';

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static('/public'));

//configs de formato do log
const {combine, printf, label, timestamp} = winston.format;

//formato do log
const myFormat = printf(
    ({level, message, label, timestamp}) => {
        return `${timestamp} [${label}] ${level}: ${message}`;
});

//instancia do logger
const logger = winston.createLogger({
    level: 'silly',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: 'my-log.log'})
    ],
    format: combine(
        label({label: 'my-app'}),
        timestamp(),
        myFormat
    )
});

//logging
logger.warn('perigo');

app.listen(port);