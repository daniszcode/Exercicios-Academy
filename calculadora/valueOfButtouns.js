export const allButtouns = document.querySelectorAll("#allButtouns");
let results = document.querySelector(".results");
let buttounStr;
let arrTemp = [];

export const valueOfButtouns = () => {
  allButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      results.textContent = buttoun.textContent;
      buttounStr = Number(results.textContent);
      arrTemp.push(buttounStr);
      arrTemp[0] === buttounStr ? arrTemp.concat(buttounStr) : (arrTemp = []);
      results.textContent = arrTemp.join("");
    });
  });
  return arrTemp;
};
