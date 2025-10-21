// npm install prompt-sync
// Adivinhe o nome

const prompt = require('prompt-sync')();

let nomeAdvinhado = "Augusto";  // Corrigido: nomeAdvinhado (maiúscula no 'A')

// Pede ao usuário para digitar o nome
let nomeDigitado = prompt("Escreva o nome: ");

// Função para verificar se o nome está correto
function adivinhaNome(nome) {
    if (nome === nomeAdvinhado) {
        console.log(" Acertou!");
    } else {
        console.log(" Errou! O nome correto era:", nomeAdvinhado);
    }
}

//  Importante: CHAMAR a função para ela ser executada!
adivinhaNome(nomeDigitado);