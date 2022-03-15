export const allButtouns = document.querySelectorAll("#allButtouns");
export let results = document.querySelector(".results");
let buttounStr;
let arrTemp = [];
let ponto = ".";

export const valueOfButtouns = (defaultt = 0) => {
  allButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      results.textContent = buttoun.textContent;
      if (results.textContent === ponto) {
        results.textContent = arrTemp.push(ponto);
      } else {
        buttounStr = Number(results.textContent);
        arrTemp.push(buttounStr);
      }

      if (arrTemp[0] === buttounStr && arrTemp[0] !== buttounStr) {
        arrTemp.concat(buttounStr);
      } else if (arrTemp.includes(ponto)) {
        arrTemp.concat(buttounStr) + arrTemp.concat(ponto);
      }
      console.log("Esse é o artemp: ", arrTemp);
      results.textContent = parseFloat(arrTemp.join(""));
      console.log(parseFloat(arrTemp.join("")));
      return parseFloat(arrTemp.join(""));
    });
  });
  return parseFloat(arrTemp.join(""));
};
