const allButtouns = document.querySelectorAll("#allButtouns");
let results = document.querySelector(".results");
const operationsButtouns = document.querySelectorAll("#operationsButtouns");

let buttounStr;
let arrTemp = [];
let ponto = ".";
let valorAtual = [];
let typewritten;

const sum = () => {
  const calc = valorAtual.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  results.textContent = "";
  results.textContent = calc;
  console.log(calc, "calc");
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
  results.textContent = "";
  results.textContent = calc;
};
const multiply = () => {
  results.textContent = "";
  const calc = valorAtual.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );

  results.textContent = "";
  results.textContent = calc;
  console.log(calc, "calc");
};

const divider = () => {
  results.textContent = "";
  const calc = valorAtual.reduce(
    (previousValue, currentValue) => previousValue / currentValue
  );
  results.textContent = calc;
};
//######################################################################

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
