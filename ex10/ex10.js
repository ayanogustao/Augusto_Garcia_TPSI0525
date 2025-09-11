const prompt = require("prompt-sync")(); 

let numero = Number(prompt("Digite um número: "));
let divisores = 0;

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        divisores++;
    }
}

console.log(`O número ${numero} possui ${divisores} divisores.`);
