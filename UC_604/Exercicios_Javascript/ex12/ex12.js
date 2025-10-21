const prompt = require("prompt-sync")();

let n = Number(prompt("Insira  um número: "));
let soma = 0;
let subtracao = 0;
let multiplicacao = 1;
let divisao = 0;
let contador = 0;

for (let i = 1; i < n; i++) {
    soma += n + i;
    subtracao += n - i;
    multiplicacao *= n * i;
    divisao += n / i;
    contador += 4; 
}

console.log("Resultado da soma: " + soma);
console.log("Resultado da subtração: " + subtracao);
console.log("Resultado da multiplicação: " + multiplicacao);
console.log("Resultado da divisão: " + divisao);
console.log("Total de operações efetuadas: " + contador);
