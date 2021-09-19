import {promises as fs} from 'fs';

class AccountRepository{

    async getAccounts()
    {
        const  jsonData = JSON.parse(await fs.readFile(global.fileName));
        return jsonData.accounts;
    }

    async getById(id)
    {
        const  accounts = await this.getAccounts();
        const  account = accounts.find(account => account.id === id);
        
        if(account === null){
            throw new Error('Conta não encontrada');
        }

        return account;
    }

    async insert(accountData)
    {
        const jsonData = JSON.parse(await fs.readFile(global.fileName));

        const account = {
            id: jsonData.nextId++,
            name: accountData.name,
            balance: accountData.balance
        };

        jsonData.accounts.push(account);
    
        await fs.writeFile(global.fileName, JSON.stringify(jsonData, null, 2));

        return account;
    }

    async delete(id)
    {
        const data    = JSON.parse(await fs.readFile(global.fileName));
        data.accounts = data.accounts.filter(
            account => account.id !== id
        );

        await fs.writeFile(global.fileName, JSON.stringify(data, null, 2));
    }

    async update(id, data)
    {
        const jsonData = JSON.parse(await fs.readFile(global.fileName));
        const index = jsonData.accounts.findIndex(account => account.id === id);

        if(index === -1){
            throw new Error('Conta não encontrada');
        }

        jsonData.accounts[index].name = data.name;
        jsonData.accounts[index].balance = data.balance;

        await fs.writeFile(global.fileName, JSON.stringify(jsonData));

        const updatedAccount = {
            id,
            name: data.name,
            balance: data.balance
        };

        return updatedAccount;
    }

    async updateBalance(id, balance){
        const jsonData = JSON.parse(await fs.readFile(global.fileName));
        const index = jsonData.accounts.findIndex(account => account.id === id);
        
        if(index === -1){
            throw new Error('Conta não encontrada');
        }

        jsonData.accounts[index].balance = balance;

        await fs.writeFile(global.fileName, JSON.stringify(jsonData));

        const updatedAccount = jsonData.accounts[index];

        return updatedAccount;
    }

}

export default new AccountRepository();