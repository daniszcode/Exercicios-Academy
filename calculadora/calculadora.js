import { valueOfButtouns, results } from "./valueOfButtouns.js";
valueOfButtouns();

const operationsButtouns = document.querySelectorAll("#operationsButtouns");
let calc = 0;

const sum = (value = 0) => {
  results.textContent = "";
  calc = calc + value;
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
  results.textContent = calc;
};

operationsButtouns.forEach((buttoun) => {
  buttoun.addEventListener("click", function () {
    if (buttoun.textContent === "+") {
      console.log("++");
      results.textContent = "";
      sum(valueOfButtouns());
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
