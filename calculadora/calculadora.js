import { valueOfButtouns, results, valorAtual } from "./valueOfButtouns.js";
valueOfButtouns();
const operationsButtouns = document.querySelectorAll("#operationsButtouns");

const sum = () => {
  results.textContent = "";
  const calc = valorAtual.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  results.textContent = calc;
};

const sub = () => {
  results.textContent = "";
  const calc = valorAtual.reduce(
    (previousValue, currentValue) =>
      console.log(
        "previousValue",
        previousValue,
        "currentValue",
        currentValue,
        "calc",
        previousValue - currentValue
      ),
    0
  );
  results.textContent = calc;
};

const multiply = () => {
  results.textContent = "";
  const calc = valorAtual.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    0
  );
  results.textContent = calc;
};

const divider = () => {
  results.textContent = "";
  const calc = valorAtual.reduce(
    (previousValue, currentValue) => previousValue / currentValue,
    0
  );
  results.textContent = calc;
};

operationsButtouns.forEach((buttoun) => {
  buttoun.addEventListener("click", function () {
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
  });
});
