function nomeDaMinhaFuncao() {
  console.log("Minha primeira funçção rodou!");
}

nomeDaMinhaFuncao();

function funcaoComParametro(meuParametro, meuSegundoParametro) {
  console.log(meuParametro, meuSegundoParametro);
}

funcaoComParametro([1, 2, 3], 3);

function retornaValor() {
  return "Meu valor retornado";
}

console.log(retornaValor());

function calculaSubtracao(primeiroValor, segundoValor) {
  return primeiroValor - segundoValor;
}

console.log(calculaSubtracao(50, 10));

function retornaVariavel(valorDaVariavel) {
  const minhaVariavel = valorDaVariavel;
  return minhaVariavel;
}

console.log(retornaVariavel("Meu primeiro retorno com variável"));

function retornoCondicional(valor) {
  if (valor > 200) {
    return "Valor maior que 200";
  } else {
    return "Valor menor que 200";
  }
}
console.log(retornoCondicional(2));

function retornoCondicionaTernario(valor) {
  return valor > 200 ? "Valor maior que 200" : "Valor menor que 200";
}

console.log(retornoCondicionaTernario(2));

const resultadoCondicional = retornoCondicionaTernario(400);

console.log(resultadoCondicional);

// arrow function

const nomeDaMinhaArrowFunction = () => {
  console.log("Minha primeira arrow function");
};

nomeDaMinhaArrowFunction();

const retornoCondicionaTernario2 = (valor) =>
  valor > 200 ? "Valor maior que 200" : "Valor menor que 200";

const resultaldo = retornoCondicionaTernario2(201);

console.log(resultaldo);

//Loops

for (let contador = 1; contador <= 5; contador++) {
  // console.log(contador);
  if (contador === 4) {
    break;
  }
}

const meuArray = [1, 2, 3, 4, 5];
const meuArray1 = [6, 7, 8, 9, 10];
const meuArray2 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let indice = 0; indice < meuArray.length; indice++) {
  console.log(meuArray[indice]);
}

meuArray1.forEach((item) => {
  console.log(item);
});

const arrayAtualizado = meuArray2.map((item) => `meu valor é ${item}`);

console.log(arrayAtualizado);
console.log(meuArray2);

function repetidorWhile() {
  let contador = 1;
  while (contador <= 5) {
    console.log("testando while");
    contador++;
  }
}

repetidorWhile();

let contador = 1;
do {
  console.log("testando do while");
  contador++;
} while (contador <= 5);
