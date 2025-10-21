let a = 1, b = 1;
const seq = [a, b];

for (let i = 3; i <= 60; i++) {
  const c = a + b;
  seq.push(c);
  a = b;
  b = c;
}

console.log("Série (primeiros 60):");
console.log(seq.join(", "));


console.log("\nComo se constrói:");
a = 1; b = 1;
for (let i = 3; i <= 60; i++) {
  const c = a + b;
  console.log(`${a} + ${b} = ${c}`);
  a = b;
  b = c;
}
