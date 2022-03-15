export const allButtouns = document.querySelectorAll("#allButtouns");
export let results = document.querySelector(".results");
const operationsButtouns = document.querySelectorAll("#operationsButtouns");

let buttounStr;
export let arrTemp = [];
let ponto = ".";
let valorAtual;
let typewritten;

export const valueOfButtouns = (defaultt = 0) => {
  allButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      results.textContent = buttoun.textContent;
      if (results.textContent === ponto) {
        results.textContent = arrTemp.push(ponto);
      } else {
        buttounStr = Number(results.textContent);
        arrTemp.push(buttounStr);
      }

      if (arrTemp[0] === buttounStr && arrTemp[0] !== buttounStr) {
        arrTemp.concat(buttounStr);
      } else if (arrTemp.includes(ponto)) {
        arrTemp.concat(buttounStr) + arrTemp.concat(ponto);
      }
      console.log("Esse é o artemp: ", arrTemp);
      results.textContent = parseFloat(arrTemp.join(""));
      console.log(parseFloat(arrTemp.join("")));
      typewritten = parseFloat(arrTemp.join(""));
    });
  });
  return typewritten;
};

const getValue = () => {
  operationsButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      valorAtual = valueOfButtouns();
      console.log(
        "Estou pegando o valor da função e fazendo alguma coisa: ",
        valorAtual,
        "este é o artemp em outra function: ",
        typewritten
      );
      // ;
    });
  });
};

getValue();

console.log("valor atual e artemp: ", valorAtual, arrTemp.length);
