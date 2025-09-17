const prompt = require('prompt-sync')();

function mediaDe30Pares() {
  const TOTAL = 30;
  let soma = 0;
  let cont = 0;

  while (cont < TOTAL) {
    const entrada = prompt(`Introduza um número PAR (${cont + 1}/${TOTAL}) entre 1 e 50: `);
    const n = Number(entrada);

    if (!Number.isInteger(n) || n < 1 || n > 50) {
      console.log("Inválido: tem de ser inteiro entre 1 e 50.");
      continue;
    }
    if (n % 2 !== 0) {
      console.log("Inválido: tem de ser PAR.");
      continue;
    }

    soma += n;
    cont++;
  }

  const media = soma / TOTAL;
  console.log(`Média dos ${TOTAL} números pares: ${media.toFixed(2)}`);
}

mediaDe30Pares();
