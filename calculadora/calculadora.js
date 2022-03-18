import { valorAtual } from "./valueOfButtouns.js";
let results = document.querySelector(".results");

export const sum = () => {
  const calc = valorAtual.reduce(
    (previousValue, currentValue) =>
      (previousValue * 10 + currentValue * 10) / 10
  );
  results.textContent = "";
  results.textContent = calc;
  console.log(calc, "calc");
};

export const sub = () => {
  results.textContent = "";
  const calc = valorAtual.reduce(
    (previousValue, currentValue) =>
      (previousValue * 10 - currentValue * 10) / 10
  );
  results.textContent = "";
  results.textContent = calc;
};
export const multiply = () => {
  results.textContent = "";
  const calc = valorAtual.reduce(
    (previousValue, currentValue) =>
      (previousValue * 10 * (currentValue * 10)) / 100
  );

  results.textContent = "";
  results.textContent = calc;
  console.log(calc, "calc");
};

export const divider = () => {
  results.textContent = "";
  const calc = valorAtual.reduce(
    (previousValue, currentValue) => (previousValue * 10) / (currentValue * 10)
  );
  results.textContent = calc;
};
