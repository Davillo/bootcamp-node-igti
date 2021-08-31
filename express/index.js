import express from "express";

const app = express();

app.get('/', (request, response) => {
    response.send('hello world 2');
});

app.post('/', (request, response) => {
    const a = 2;
    const b = 5;
    const result = a+b;
    response.send(`Resultado: ${result}`); 
});

app.listen(8080, () => {
    console.log('listening on');
});