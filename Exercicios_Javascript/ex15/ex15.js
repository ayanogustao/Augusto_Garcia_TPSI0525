const prompt = require('prompt-sync')();

function mostrarASCII() {
  let inicio = 0;
  const limite = 255;
  const passo = 20;

  while (inicio <= limite) {
    console.log("\nCódigos ASCII de " + inicio + " até " + Math.min(inicio + passo - 1, limite) + ":");

    for (let i = inicio; i < inicio + passo && i <= limite; i++) {
      const ch = (i >= 32 && i <= 126) ? String.fromCharCode(i) : "·"; 
      console.log(i + " -> " + ch);
    }

    inicio += passo;

    if (inicio <= limite) {
      const continuar = prompt("Deseja continuar vendo os próximos 20? (s/n) ");
      if (!continuar || continuar.toLowerCase() !== "s") {
        console.log("Programa terminado.");
        break;
      }
    }
  }
}

mostrarASCII();
