const meuPrimeiroObjeto = {};

const meuCarro = {
  modelo: "clio",
  cor: "branco",
  ano: 2018,
  eNovo: true,
};

console.log(meuCarro.modelo);
console.log(meuCarro["estado"]);

const modeloCarro = "modelo";
console.log(meuCarro[modeloCarro]);
var { modelo } = meuCarro;

console.log(modelo);

meuCarro.temSeguro = true;

console.log(meuCarro);

meuCarro.ano = 2021;
console.log(meuCarro);

delete meuCarro.temSeguro;
console.log(meuCarro);
