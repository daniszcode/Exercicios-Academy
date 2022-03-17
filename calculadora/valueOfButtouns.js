export const allButtouns = document.querySelectorAll("#allButtouns");
export let results = document.querySelector(".results");
const operationsButtouns = document.querySelectorAll("#operationsButtouns");

let buttounStr;
export let arrTemp = [];
let ponto = ".";
export let valorAtual = [];
let typewritten;

export const valueOfButtouns = () => {
  allButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      results.textContent = buttoun.textContent;
      if (results.textContent === ponto) {
        arrTemp.push(ponto);
      } else {
        buttounStr = parseFloat(results.textContent);
        arrTemp.push(buttounStr);
      }

      if (arrTemp[0] === buttounStr && arrTemp[0] !== buttounStr) {
        arrTemp.concat(buttounStr);
      } else if (arrTemp.includes(ponto)) {
        arrTemp.concat(buttounStr) + arrTemp.concat(ponto);
      }

      results.textContent = parseFloat(arrTemp.join(""));
      typewritten = parseFloat(arrTemp.join(""));
      valorAtual.push(buttounStr);
    });
  });
  return typewritten;
};

export const setValue = () => {
  operationsButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      console.log("arrTemp", arrTemp);
      for (let i = 0; i < arrTemp.length; i++) {
        arrTemp[i] = 0;
      }
    });
  });
  console.log("valoratual:", valorAtual);
  console.log("typewritten:", typewritten);
  return valorAtual;
};
