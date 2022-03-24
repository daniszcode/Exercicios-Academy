const allButtouns = document.querySelectorAll("#allButtouns");
const operationsButtouns = document.querySelectorAll("#operationsButtouns");

let results = document.querySelector(".results");
let valorAtual = [];
let buttonValue;
let arrayTemporario = [];
let ponto = ".";
let typewritten;
let arrayButtounOperations = [];

const valueOfButtouns = () => {
  allButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      if (buttoun.textContent === ponto) {
        arrayTemporario.push(ponto);
      } else {
        buttonValue = parseFloat(buttoun.textContent);
        arrayTemporario.push(buttonValue);
      }

      if (arrayTemporario.includes(ponto)) {
        arrayTemporario.concat(buttonValue, ponto);
      }

      if (results.textContent.length > 11) {
        results.textContent = "Erro";
      } else {
        results.textContent = parseFloat(arrayTemporario.join(""));
      }
    });
  });
};

valueOfButtouns();

const operations = () => {
  operationsButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      typewritten = parseFloat(arrayTemporario.join(""));
      typewritten !== 0 ? valorAtual.push(typewritten) : false;

      arrayButtounOperations.push(buttoun.textContent);

      for (let i = 0; i < arrayTemporario.length; i++) {
        arrayTemporario[i] = 0;
      }

      let previousValue = valorAtual.reduce((previousValue, currentValue) => {
        if (buttoun.textContent === "+") {
          return (
            (parseFloat(previousValue * 10) + parseFloat(currentValue * 10)) /
            10
          );
        }
        if (buttoun.textContent === "-") {
          return (
            (parseFloat(previousValue * 10) - parseFloat(currentValue * 10)) /
            10
          );
        }
        if (buttoun.textContent === "X") {
          return (
            (parseFloat(previousValue * 10) * parseFloat(currentValue * 10)) /
            100
          );
        }
        if (buttoun.textContent === "/") {
          return parseFloat(previousValue * 10) / parseFloat(currentValue * 10);
        }
        if (
          arrayButtounOperations.includes("+") &&
          arrayButtounOperations.includes("=")
        ) {
          return (
            (parseFloat(previousValue * 10) + parseFloat(currentValue * 10)) /
            10
          );
        }
        if (
          arrayButtounOperations.includes("-") &&
          arrayButtounOperations.includes("=")
        ) {
          return (
            (parseFloat(previousValue * 10) - parseFloat(currentValue * 10)) /
            10
          );
        }
        if (
          arrayButtounOperations.includes("/") &&
          arrayButtounOperations.includes("=")
        ) {
          return parseFloat(previousValue * 10) / parseFloat(currentValue * 10);
        }
        if (
          arrayButtounOperations.includes("X") &&
          arrayButtounOperations.includes("=")
        ) {
          return (
            (parseFloat(previousValue * 10) * parseFloat(currentValue * 10)) /
            100
          );
        }
      });

      if (arrayButtounOperations.includes("C")) {
        valorAtual.splice(0, 2);
        previousValue = 0;
        results.textContent = "0";
        arrayButtounOperations.pop();
      }
      if (valorAtual.length >= 2) {
        valorAtual.splice(0, 2, previousValue);
      }
      results.textContent = parseFloat(previousValue);
    });
  });
};
operations();
