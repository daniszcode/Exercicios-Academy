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
      } else if (buttoun.textContent === "C") {
        results.textContent = "";
        arrTemp = [];
        typewritten = 0;
        location.reload();
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

      preventValue = valorAtual.reduce((preventValue, currentValue) => {
        if (buttoun.textContent === "+") {
          console.log("++");
          results.textContent = "";
          console.log(
            "preventValue",
            preventValue,
            "currentValue",
            currentValue
          );
          preventValue =
            (parseFloat(preventValue * 10) + parseFloat(currentValue * 10)) /
            10;
        }
        if (buttoun.textContent === "-") {
          console.log("--");
          results.textContent = "";
          preventValue =
            (parseFloat(preventValue * 10) - parseFloat(currentValue * 10)) /
            10;
        }
        if (buttoun.textContent === "X") {
          console.log("xx");
          results.textContent = "";

          preventValue =
            (parseFloat(preventValue * 10) * parseFloat(currentValue * 10)) /
            100;
        }
        if (buttoun.textContent === "/") {
          console.log("//");
          results.textContent = "";

          preventValue =
            parseFloat(preventValue * 10) / parseFloat(currentValue * 10);
        } else if (buttoun.textContent === "=") {
          results.textContent = preventValue;
        }
        console.log(preventValue, "preventValue;");
        results.textContent = preventValue;
        return preventValue;
      });
      console.log(preventValue, "calc");
    });
  });
}

operations();
