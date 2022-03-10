export const allButtouns = document.querySelectorAll("#allButtouns");
let results = document.querySelector(".results");
let retorno;
let buttounStr;

export const valueOfButtouns = () => {
  allButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      results.textContent = buttoun.textContent;
      buttounStr = results.textContent;
      retorno = Number(buttounStr);
    });
  });
  return retorno;
};
