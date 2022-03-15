export const allButtouns = document.querySelectorAll("#allButtouns");
export let results = document.querySelector(".results");
let buttounStr;
let arrTemp = [];

export const valueOfButtouns = () => {
  allButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      results.textContent = buttoun.textContent;
      buttounStr = results.textContent;
      arrTemp.push(buttounStr);

      if (arrTemp[0] === buttounStr) {
        arrTemp.concat(buttounStr);
      } else if (arrTemp.includes(".") && arrTemp[0] !== buttounStr) {
        arrTemp.concat(buttounStr);
      } else if (arrTemp[0] !== buttounStr) {
        arrTemp = [];
      }
      results.textContent = parseFloat(arrTemp.join(""));
      console.log(parseFloat(arrTemp.join("")));
      return parseFloat(arrTemp.join(""));
    });
  });
  return parseFloat(arrTemp.join(""));
};
