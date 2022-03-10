export const allButtouns = document.querySelectorAll("#allButtouns");
const results = document.querySelector(".results");
let retorno;

export const valueOfButtouns = () => {
  allButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      switch (buttoun.textContent) {
        case "1":
          retorno = results.textContent = 1;
          return retorno;
        case "2":
          retorno = results.textContent = 2;
          return retorno;
        case "3":
          retorno = results.textContent = 3;
          return retorno;
        case "4":
          retorno = results.textContent = 4;
          return retorno;
        case "5":
          retorno = results.textContent = 5;
          return retorno;
        case "6":
          retorno = results.textContent = 6;
          return retorno;
        case "7":
          retorno = results.textContent = 7;
          return retorno;
        case "8":
          retorno = results.textContent = 8;
          return retorno;
        case "9":
          retorno = results.textContent = 9;
          return retorno;
        case "0":
          retorno = results.textContent = 0;
          return retorno;
      }
    });
  });
  return retorno;
};
