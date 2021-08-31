import express from 'express';
import carsRouter from './carsRouter.js';

const app = express();

app.use('/cars', carsRouter);

app.use(express.json());

app.use((req, res, next) => {
    console.log(new Date());
    next();
});

app.get('/', (req, res) => {
    res.end();
});

app.listen(3000, () => {
    console.log('api started');
});