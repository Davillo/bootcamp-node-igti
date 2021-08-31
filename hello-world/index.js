const number = 100;

const multiples = [];

for (let i = 0; i < number; i++) {
    if((i % 3) === 0 || (i % 5 ===0)) {
        multiples.push(i);
    }
}

console.log(multiples);
