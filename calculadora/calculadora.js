import { valueOfButtouns, results } from "./valueOfButtouns.js";

let valorAtual = valueOfButtouns();
let setValor;
const operationsButtouns = document.querySelectorAll("#operationsButtouns");
let calc = 0;

const sum = (valorAtual, setValor) => {
  valorAtual = valueOfButtouns();
  valueOfButtouns(0);
  setValor = valueOfButtouns();
  results.textContent = "";
  calc = valorAtual + setValor;
  console.log("calc: ", calc);
};

const sub = (value = 0) => {
  results.textContent = "";
  calc = value - calc;
  console.log("calc: ", calc);
};

const multiply = (value = 0) => {
  results.textContent = "";
  calc = parseFloat(calc) * parseFloat(value);
  console.log("calc: ", calc);
};

operationsButtouns.forEach((buttoun) => {
  buttoun.addEventListener("click", function () {
    if (buttoun.textContent === "+") {
      console.log("++");
      console.log("valorAtual, setValor", valorAtual, setValor);

      sum(valorAtual, setValor);
    }

    if (buttoun.textContent === "-") {
      console.log("--");
      sub(valueOfButtouns());
    }

    if (buttoun.textContent === "X") {
      console.log("xx");
      multiply(valueOfButtouns());
    }
  });
});
