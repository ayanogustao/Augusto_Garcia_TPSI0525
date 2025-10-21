const prompt = require('prompt-sync')();

function ehPerfeito(n) {
  if (n < 2) return false;
  let soma = 1; 
  for (let d = 2; d <= Math.floor(n / 2); d++) {
    if (n % d === 0) soma += d;
  }
  return soma === n;
}

function main() {
  const entrada = prompt("Introduza um inteiro N (>= 1): ");
  const N = Number(entrada);

  if (!Number.isInteger(N) || N < 1) {
    console.log("Valor inválido. Tem de ser um inteiro >= 1.");
    return;
  }

  const perfeitos = [];
  for (let i = 1; i <= N; i++) {
    if (ehPerfeito(i)) perfeitos.push(i);
  }

  console.log(`Entre 1 e ${N} existem ${perfeitos.length} números perfeitos.`);
  if (perfeitos.length > 0) console.log("São eles:", perfeitos.join(", "));
}

main();
