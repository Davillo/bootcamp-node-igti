import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    console.log('get /carros');
    res.send('get /carros');
});

router.get('/precos', (req, res) => {
    console.log('get /carros/precos');
    res.send('get /carros/precos ');
});

export default router;