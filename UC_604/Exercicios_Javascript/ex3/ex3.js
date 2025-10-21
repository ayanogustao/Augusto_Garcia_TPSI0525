const prompt = require("prompt-sync")();

let soma = 0;

for (let i = 1; i <= 10; i++) {
    let nota = parseFloat(prompt("Digite a nota do aluno " + i + ": "));
    soma += nota;
}

let media = soma / 10;
console.log("A média das notas é: " + media.toFixed(2));
