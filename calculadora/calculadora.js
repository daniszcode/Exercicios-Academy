import { valorAtual } from "./valueOfButtouns.js";
let results = document.querySelector(".results");
let calc;

export const sum = () => {
  let calc = valorAtual.reduce(
    (previousValue, currentValue) =>
      (previousValue * 10 + currentValue * 10) / 10
  );
  results.textContent = "";
  results.textContent = calc;
  console.log(calc, "calc");
  return calc;
};

export const sub = () => {
  results.textContent = "";
  let calc = valorAtual.reduce(
    (previousValue, currentValue) =>
      (previousValue * 10 - currentValue * 10) / 10
  );
  results.textContent = "";
  results.textContent = calc;
  return calc;
};

export const multiply = () => {
  results.textContent = "";
  let calc = valorAtual.reduce(
    (previousValue, currentValue) =>
      (previousValue * 10 * (currentValue * 10)) / 100
  );

  results.textContent = "";
  results.textContent = calc;
  console.log(calc, "calc");
  return calc;
};

export const divider = () => {
  results.textContent = "";
  let calc = valorAtual.reduce(
    (previousValue, currentValue) => (previousValue * 10) / (currentValue * 10)
  );
  results.textContent = calc;
  return calc;
};

export let retorno = () => calc;
