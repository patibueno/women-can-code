const nome = "Patricia Bueno";
const idade = 33;
const eMaiorDeIdade = true;

console.log(nome, idade, eMaiorDeIdade);
console.log(
  "Meu nome é " +
    nome +
    " eu sou maior de idade " +
    eMaiorDeIdade +
    " Pois tenho " +
    idade +
    " anos"
);

console.log(
  `Meu nome é ${nome} e eu tenho ${idade} anos, eu já sou maior de idade ${eMaiorDeIdade}`
);

// operações matemáticas

var soma = 20 + 5;
var subtracao = 200 - 33;
var multiplicacao = 11 * 17;
var divisao = 66 / 3;
var restoDeDivisao = 20 % 7;
var total = 300 + subtracao;
console.log(soma, subtracao, multiplicacao, divisao, restoDeDivisao, total);

//logica condicional

if (total > 500) {
  console.log("Total é maior que 500");
} else {
  console.log("Total é menor que 500");
}

if (total > 500) {
  console.log("Total é maior que 500");
} else if (total > 400) {
  console.log("Total é maior que 400");
} else {
  console.log("Total não é maior que 400");
}

total > 500
  ? console.log("Total é maior que 500, ternário")
  : console.log("Total é menor que 500, ternário");

//operadores de comparação

var primeiroValor = 3;
var segundoValor = "3";
console.log(primeiroValor == segundoValor);
console.log(primeiroValor === segundoValor);
console.log(primeiroValor != segundoValor);
console.log(primeiroValor !== segundoValor);

console.log(typeof primeiroValor);

console.log(typeof segundoValor);

var terceiroValor = 700;
var quartoValor = 90;

console.log(terceiroValor > quartoValor);
