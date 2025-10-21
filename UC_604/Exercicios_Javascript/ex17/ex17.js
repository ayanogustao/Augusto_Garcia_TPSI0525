let seq = [];

for (let n = 1; n <= 1000; n++) {
  if (n % 5 === 0 && n % 3 !== 0) {
    seq.push(n);
  }
}

console.log(seq.join(", "));