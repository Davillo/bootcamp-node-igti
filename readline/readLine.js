import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ask();

function ask(){
    rl.question("digite um numero: ", (number) => {

        if(parseInt(number) === -1){
            rl.close();
        }else{
            const multiples = [];

            for (let i = 0; i < number; i++) {
                if((i % 3) === 0 || (i % 5 ===0)) {
                    multiples.push(i);
                }
            }

            console.log(multiples);

            ask();
        }
    });
}

