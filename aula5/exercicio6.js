//opção for

const criarPares = (validaPares) => {
  for (let indice = 0; indice < validaPares.length; indice++) {
    if (validaPares[indice] % 2 === 0) {
      console.log(validaPares[indice]);
    }
  }
};

const valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
criarPares(valoresNum);

//

//opção Filter
const meusNumerosPares = valoresNum.filter((numero) => {
  return numero % 2 === 0;
});

console.log(meusNumerosPares)