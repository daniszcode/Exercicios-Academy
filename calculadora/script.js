const allButtouns = document.querySelectorAll("#allButtouns");
const operationsButtouns = document.querySelectorAll("#operationsButtouns");

let results = document.querySelector(".results");
let valorAtual = [];
let buttounStr;
let arrTemp = [];
let ponto = ".";
let typewritten;
let arrButtoun = [];
const valueOfButtouns = () => {
  allButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      if (buttoun.textContent === ponto) {
        arrTemp.push(ponto);
      } else {
        buttounStr = parseFloat(buttoun.textContent);
        arrTemp.push(buttounStr);
      }

      if (arrTemp.includes(ponto)) {
        arrTemp.concat(buttounStr, ponto);
      }

      results.textContent = parseFloat(arrTemp.join(""));
    });
  });
};

valueOfButtouns();

const operations = () => {
  operationsButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      typewritten = parseFloat(arrTemp.join(""));
      typewritten !== 0 ? valorAtual.push(typewritten) : false;

      arrButtoun.push(buttoun.textContent);

      for (let i = 0; i < arrTemp.length; i++) {
        arrTemp[i] = 0;
      }

      let preventValue = valorAtual.reduce((preventValue, currentValue) => {
        if (buttoun.textContent === "+") {
          return (
            (parseFloat(preventValue * 10) + parseFloat(currentValue * 10)) / 10
          );
        }
        if (buttoun.textContent === "-") {
          return (
            (parseFloat(preventValue * 10) - parseFloat(currentValue * 10)) / 10
          );
        }
        if (buttoun.textContent === "X") {
          return (
            (parseFloat(preventValue * 10) * parseFloat(currentValue * 10)) /
            100
          );
        }
        if (buttoun.textContent === "/") {
          return parseFloat(preventValue * 10) / parseFloat(currentValue * 10);
        }
        if (arrButtoun.includes("+") && arrButtoun.includes("=")) {
          return (
            (parseFloat(preventValue * 10) + parseFloat(currentValue * 10)) / 10
          );
        }
        if (arrButtoun.includes("-") && arrButtoun.includes("=")) {
          return (
            (parseFloat(preventValue * 10) - parseFloat(currentValue * 10)) / 10
          );
        }
        if (arrButtoun.includes("/") && arrButtoun.includes("=")) {
          return parseFloat(preventValue * 10) / parseFloat(currentValue * 10);
        }
        if (arrButtoun.includes("X") && arrButtoun.includes("=")) {
          return (
            (parseFloat(preventValue * 10) * parseFloat(currentValue * 10)) /
            100
          );
        }
      });
      if (arrButtoun.includes("C")) {
        valorAtual.splice(0, 2);
        preventValue = 0;
        results.textContent = "0";
        arrButtoun.pop();
      }
      if (valorAtual.length >= 2) {
        valorAtual.splice(0, 2, preventValue);
      }

      results.textContent = parseFloat(preventValue);
    });
  });
};

operations();
