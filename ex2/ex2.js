
const prompt = require('prompt-sync')();

let numero = [];

console.log ("Vamos inserir 10 numeros a ver se são pares ou impares !");
for (let i = 0; i < 10; i++) {
    numero[i] = parseInt(prompt(`Insira o ${i+1}º numero:`));
    numero.push(numero);
}

console .log("Os numeros pares são:");
for (let i = 0; i < numero.length; i++) {
   let num = numero[i];
   let resto = num % 2;

   if (resto === 0) {
        console.log("O numeor", num, "é par");

}

else {
    console.log("O numero", num, "é impar");
}   

}
