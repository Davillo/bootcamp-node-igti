import accountService from "../services/AccountService.js";

class AccountController {

    async create(request, response, next){
        const data = request.body;
    
        if(!data.balance == null || !data.name){        
            throw new Error('Name e balance são obrigatórios');
        }
    
        try {
            const account = await accountService.createAccount({name: data.name, balance: data.balance});

            logger.info('POST /accounts');

            response.send(account);
        }catch (error) {
            next(error);
        }
    }


    async index(request, response, next){
        try {
            const data = await accountService.getAccounts();

            logger.info('GET /accounts');

            response.send(data);
        } catch (error) {
            next(error);
        }
    }

    async show(request, response, next){
        try {
            const id = parseInt(request.params.id);
    
            const account = await accountService.getAccount(id);
            
            logger.info(`GET /account/${id}`);

            response.send(account);
        } catch (error) {
            next(error);
        }
    }

    async destroy(request, response, next){
        try {
            const id = parseInt(request.params.id);
    
            if(!request.params.id){        
                throw new Error('id é obrigatório');
            }
    
            await accountService.delete(id);

            logger.info(`DELETE /account/${id}`)

            response.status(204).send({});
        } catch (error) {
            next(error);
        }
    }

    async update(request, response, next){
        try {
            const id = parseInt(request.params.id);
            const data = request.body;
            
            if(data.balance === null || data.name === null || data.id === null){        
                throw new Error('Name e balance são obrigatórios');
            }
    
            const updatedAccount = await accountService.update(id, data);

            logger.info(`PUT /account/${id}`)
    
            response.send(updatedAccount);
        } catch (error) {
            next(error);
        }
    }

    async updateBalance(request, response, next){
        try {
            const id = parseInt(request.params.id);
            const data = request.body;

            if(data.id === null || data.balance === null || data.balance < 0){
                throw new Error('Id e balance são obrigatórios');
            }

            const account = await accountService.updateBalance(id, data.balance);

            logger.info(`PATCH /account/${id}`)

            response.send(account);
        } catch (error) {
            next(error);
        }
    }
}


export default new AccountController();