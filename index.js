import readlineSync from "readline-sync";


const propriedades = [];
let condicao = "";

while (condicao != "sair") {
  propriedades.push(condicao);
  condicao = readlineSync
    .question("insira uma condiçao CSS: ")
    .toLocaleLowerCase();
}
console.log((propriedades.sort().join("\n")));
