export const allButtouns = document.querySelectorAll("#allButtouns");
export let results = document.querySelector(".results");
const operationsButtouns = document.querySelectorAll("#operationsButtouns");

let buttounStr;
export let arrTemp = [];
let ponto = ".";
let valorAtual = [];
let typewritten;

export const valueOfButtouns = () => {
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
      results.textContent = parseFloat(arrTemp.join(""));
      typewritten = parseFloat(arrTemp.join(""));

      console.log("Esse é o artemp: ", arrTemp);
    });
  });
  return typewritten;
};

export const getValue = () => {
  operationsButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      arrTemp.forEach((numero) => {
        console.log("numero do getvalue:", numero);
        valorAtual.push(numero);
      });
      for (let i = 0; i < arrTemp.length; i++) {
        arrTemp[i] = 0;
        console.log("esse é o i", i, "Esse é o artemp[i]", arrTemp[i]);
      }
      console.log("Esse é o artemp", arrTemp);
      console.log("valoratual:", valorAtual);
    });
  });
  return valorAtual;
};
