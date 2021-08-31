import {promises as fs} from 'fs';


//init();
writeReadJson();

//async / await
/**
 * async function init(){
    try {
        await fs.writeFile('teste.txt', 'bla bla bla');
        await fs.appendFile('teste.txt', 'appended file');
        const data = await fs.readFile('teste.txt', 'utf8');
        console.log(data);
    }catch(e){
        console.log(e);
    }
}
 */

async function writeReadJson(){
    try {
        //dados iniciais
        const carsArray = [
            'gol',
            'palio',
            'uno'
        ];
        
        await fs.writeFile('teste.json', JSON.stringify({cars: carsArray}));

        //leitura do conteudo
        const data = JSON.parse(await fs.readFile('teste.json'));
         //modificação do conteudo


        const carsNovo = [...carsArray, 'carrinho'];

        //soborescrever arquivo com conteudo modificado
        await fs.writeFile('teste.json', JSON.stringify({cars: carsNovo}));
    }catch(err){
        console.log(err);
    }
}

/** 
 * promises 
fs.writeFile('teste.txt', 'bla bla bla').then(() => {
    fs.appendFile('teste.txt', 'appended file').then(() => {
        fs.readFile('teste.txt', 'utf8').then((response) => {
            console.log(response);
        }).catch(err => console.log(err));
    });
}).catch(err => console.log(err));
*/
/**
fs.writeFile('teste.txt', 'bla bla bla', (err) => {
    if(err){
        console.log(err);
    }else{

        fs.appendFile('teste.txt', 'bla bla', (err) => {
            if(err){
                console.log(err);
            }else{
                fs.readFile('teste.txt', 'utf8', (err, data) => {
                    console.log(data);
                });
            }
        });
        
    }
});

try{
    console.log('1');
    fs.writeFileSync('teste.txt', 'bla bla');
    console.log('2');
    const data = fs.readFileSync('teste.txt', 'utf-8');
    console.log(data);
    console.log('3');
}catch(err){
    console.log(err);
}
*/