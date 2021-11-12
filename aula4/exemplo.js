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

const meuArrayStrings = ["Pati", "Bueno", "CWB"];

const meuArrayNumeros = [10, 20, 30, 100, 765];

const meuArrayBooleanos = [true, false, true];

const meuArrayObjetos = [
  { nome: "Pati", sobrenome: "Bueno" },
  { cidade: "CWB" },
];

const meuArrayVariosTipos = ["Abacaxi", 700, true, { eletronico: "notrbook" }];

console.log(meuArrayVariosTipos.length);

const tamanhoMeuArrayVariosTipos = meuArrayVariosTipos.length;

console.log(meuArrayVariosTipos[tamanhoMeuArrayVariosTipos - 1]);

const indiceUltimoItem = tamanhoMeuArrayVariosTipos - 1;
console.log(meuArrayVariosTipos[indiceUltimoItem]);

meuArrayVariosTipos.push(["8", "9", "10"]);

console.log(meuArrayVariosTipos);
meuArrayVariosTipos.push("hello");

console.log(meuArrayVariosTipos);

meuArrayVariosTipos.unshift("quinta-feira");

console.log(meuArrayVariosTipos);

meuArrayVariosTipos[3] = "fone de ouvido";

console.log(meuArrayVariosTipos);

meuArrayVariosTipos.shift();
console.log(meuArrayVariosTipos);

console.log(meuArrayVariosTipos.indexOf("fone de ouvido"));

meuArrayVariosTipos.splice(3,1)
console.log(meuArrayVariosTipos);

meuArrayVariosTipos.splice(2,2)
console.log(meuArrayVariosTipos);