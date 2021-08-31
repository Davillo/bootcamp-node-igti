import express from 'express';

const port = 3000;

const app = express();

app.use(express.json());



app.get('/', (req, res) => {
    throw new Error('Error message');
});

app.post('/', async (req, res, next) => {
    try {
        throw new Error('Error message async');
    }catch(err) {
        next(err);
    }
})

app.use((err,req, res, next) => {
    console.error('error 1');
    next(err);
});

app.use((err,req, res, next) => {
    console.error('error 2');
    res.status(500).send('ocorreu um erro ao consultar dados.');
});

app.listen(port, () => {
    console.log('started');
});