import { valueOfButtouns } from "./valueOfButtouns.js";

const operationsButtouns = document.querySelectorAll("#operationsButtouns");
let calc = 0;

const sum = (value = 0) => {
  calc = calc + value;
  console.log("calc: ", calc);
};
valueOfButtouns();

operationsButtouns.forEach((buttoun) => {
  buttoun.addEventListener("click", function () {
    if (buttoun.textContent === "+") {
      console.log("++");
      sum(valueOfButtouns());
    }
  });
});
