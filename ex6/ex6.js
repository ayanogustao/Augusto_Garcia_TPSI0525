let contar = 0;
let numero = 2;

while (contar < 10) {
    let primo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        console.log(numero);
        contar++;
    }

    numero++;
}
