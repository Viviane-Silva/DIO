// Array base para os exercícios 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosDobrados = numeros.map((numero) => numero * 2);
// O método .map() cria um novo array com os resultados da aplicação de uma função para cada elemento do array original.
console.log("Números dobrados com .map():", numerosDobrados);
// Saída: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const numerosPares = numeros.filter((numero) => numero % 2 === 0);
// O método .filter() cria um novo array com todos os elementos que passaram no teste implementado pela função.
console.log("Números pares com .filter():", numerosPares);
// Saída: [2, 4, 6, 8, 10]

const somaTotal = numeros.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual,
  0
);
// O método .reduce() aplica uma função a um acumulador e a cada elemento do array (da esquerda para a direita) para reduzi-lo a um único valor.
console.log("Soma total com .reduce():", somaTotal);
// Saída: 55
