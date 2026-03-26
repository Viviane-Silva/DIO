// Gera o número secreto entre 1 e 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativa;
let tentativas = 0;

do {
  tentativa = Math.floor(Math.random() * 10) + 1;
  tentativas++;
  console.log(`Tentativa ${tentativas}: ${tentativa}`);
} while (tentativa !== numeroSecreto);

console.log(`\nNúmero secreto: ${numeroSecreto}`);
console.log(`Acertou em ${tentativas} tentativa(s)!`);
