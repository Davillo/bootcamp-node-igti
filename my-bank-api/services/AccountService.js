import accountRepository from '../repositories/AccountRepository.js';

class AccountService {
    async createAccount(data){    
        const account = await accountRepository.insert(data);
        return account;
    }

    async getAccounts(){
        const data = await accountRepository.getAccounts();
        return data;
    }

    async getAccount(id){
        const account = await accountRepository.getById(id);
        return account;
    }

    async delete(id){
        return await accountRepository.delete(id);
    }

    async update(id, data){
        return await accountRepository.update(id, data);
    }

    async updateBalance(id, balance){
        return await accountRepository.updateBalance(id, balance);
    }
}

export default new AccountService();