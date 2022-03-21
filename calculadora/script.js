const allButtouns = document.querySelectorAll("#allButtouns");
const operationsButtouns = document.querySelectorAll("#operationsButtouns");

let results = document.querySelector(".results");
let valorAtual = [];
let buttounStr;
let arrTemp = [];
let ponto = ".";
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

      results.textContent = parseFloat(arrTemp.join(""));
    });
  });
};

valueOfButtouns();

const operations = () => {
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

      let calc = 0;

      valorAtual.reduce((preventValue, currentValue) => {
        if (buttoun.textContent === "+") {
          console.log("++");
          results.textContent = "";
          return (
            (calc =
              (parseFloat(preventValue * 10) + parseFloat(currentValue * 10)) /
              10),
            calc
          );
        }

        if (buttoun.textContent === "-") {
          console.log("--");
          results.textContent = "";

          return (
            (calc =
              (parseFloat(preventValue * 10) - parseFloat(currentValue * 10)) /
              10),
            calc
          );
        }

        if (buttoun.textContent === "X") {
          console.log("xx");
          results.textContent = "";

          return (
            (calc =
              (parseFloat(preventValue * 10) * parseFloat(currentValue * 10)) /
              100),
            calc
          );
        }

        if (buttoun.textContent === "/") {
          console.log("//");
          results.textContent = "";

          return (
            (calc =
              parseFloat(preventValue * 10) / parseFloat(currentValue * 10)),
            calc
          );
        } else if (buttoun.textContent === "C") {
          return (preventValue = 0), (currentValue = 0);
        }
      });
      console.log("preventValue", calc);
      results.textContent = calc;
      if (buttoun.textContent === "=") {
        results.textContent = calc;
      }
    });
  });
};

operations();
