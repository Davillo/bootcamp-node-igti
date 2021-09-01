import express from 'express';
import { response } from 'express';
import {promises as fs} from 'fs';

const router = express.Router();

router.post('/', async (request, response) => {
    const data = request.body;

    try {
        const jsonData = JSON.parse(await fs.readFile(global.fileName));

        const account = {
            id: jsonData.nextId++,
            ...data
        };

        jsonData.accounts.push(account);

        await fs.writeFile(global.fileName, JSON.stringify(jsonData, null, 2));

        response.send(account);
    }catch (error) {
        response.status(400).send({error: error.message});
    }
});

router.get('/', async (request, response) => {

    try {
        const jsonData = JSON.parse(await fs.readFile(global.fileName));
        delete jsonData.nextId;
        response.send(jsonData);
    } catch (error) {
        response.status(400).send({error: error.message});
    }

});

router.get('/:id', async (request, response) => {

    try {
        const id = parseInt(request.params.id);

        const jsonData = JSON.parse(await fs.readFile(global.fileName));

        const accounts = jsonData.accounts;

        const account = accounts.find(account => account.id === id);
        
        response.send(account);
    } catch (error) {
        response.status(400).send({error: error.message});
    }

});

router.delete('/:id', async (request, response) => {

    try {
        const id = parseInt(request.params.id);

        const jsonData = JSON.parse(await fs.readFile(global.fileName));

        jsonData.accounts = jsonData.accounts.filter(
            account => account.id !== id
        );
        
        await fs.writeFile(global.fileName, JSON.stringify(jsonData, null, 2));

        response.status(204).send({});
    } catch (error) {
        response.status(400).send({error: error.message});
    }

});

export default router;