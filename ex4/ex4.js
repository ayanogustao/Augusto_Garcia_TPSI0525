const prompt = require("prompt-sync")(); 

let numero = parseInt(prompt("insira um número inteiro: "));
let primo = true;

if (numero < 2) {
    primo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            primo = false;
         
        }
    }
}

if (primo) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}
