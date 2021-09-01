import express from "express";
import accountsRouter from './routes/accounts.js';
import {promises as fs} from 'fs';

global.fileName = 'accounts.json';

const app = express();

app.use(express.json());

app.use('/accounts', accountsRouter);

app.listen(3000, async () => {
    
    try {
        await fs.readFile(global.fileName);
        console.log('Api Started');
    }catch (err){
        const initialJson = {
            nextId: 1,
            accounts: [],
        };

        fs.writeFile(global.fileName, JSON.stringify(initialJson)).then(() => {
            console.log('Api Started and file created');
        })
        .catch(err => 
            console.log(err)
        );
    }
});