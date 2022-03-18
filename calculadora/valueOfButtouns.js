import { sub, sum, multiply, divider, retorno } from "./calculadora.js";
const allButtouns = document.querySelectorAll("#allButtouns");
let results = document.querySelector(".results");
const operationsButtouns = document.querySelectorAll("#operationsButtouns");

let buttounStr;
let arrTemp = [];
let ponto = ".";
export let valorAtual = [];
let typewritten;

const valueOfButtouns = () => {
  allButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      if (buttoun.textContent === ponto) {
        arrTemp.push(ponto);
      } else {
        buttounStr = parseFloat(buttoun.textContent);
        arrTemp.push(buttounStr);
      }

      if (arrTemp[0] === buttounStr && arrTemp[0] !== buttounStr) {
        arrTemp.concat(buttounStr);
      } else if (arrTemp.includes(ponto)) {
        arrTemp.concat(buttounStr, ponto);
      }

      if (buttoun.textContent === "C") {
        results.textContent = "";
        arrTemp = [];
        valueOfButtouns();
      } else {
        results.textContent = parseFloat(arrTemp.join(""));
      }
    });
  });
};

valueOfButtouns();

function operations() {
  operationsButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      typewritten = parseFloat(arrTemp.join(""));
      valorAtual.push(typewritten);
      console.log(
        "typewritten",
        typewritten,
        "buttounStr",
        buttounStr,
        "artemp",
        arrTemp,
        "valoratual",
        valorAtual
      );

      for (let i = 0; i < arrTemp.length; i++) {
        arrTemp[i] = 0;
      }

      if (buttoun.textContent === "+") {
        console.log("++");
        results.textContent = "";
        sum();
      }

      if (buttoun.textContent === "-") {
        console.log("--");
        results.textContent = "";
        sub();
      }

      if (buttoun.textContent === "X") {
        console.log("xx");
        results.textContent = "";
        multiply();
      }

      if (buttoun.textContent === "/") {
        console.log("//");
        results.textContent = "";
        divider();
      }

      if (buttoun.textContent === "=") {
        results.textContent = retorno();

        console.log("==", calc);
      }
    });
  });
}

operations();
