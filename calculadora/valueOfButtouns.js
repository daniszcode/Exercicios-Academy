export const allButtouns = document.querySelectorAll("#allButtouns");
const results = document.querySelector(".results");

export const valueOfButtouns = () => {
  allButtouns.forEach((buttoun) => {
    buttoun.addEventListener("click", function () {
      switch (buttoun.textContent) {
        case "1":
          results.textContent = 1;
          break;
        case "2":
          results.textContent = 2;
          break;
        case "3":
          results.textContent = 3;
          break;
        case "4":
          results.textContent = 4;
          break;
        case "5":
          results.textContent = 5;
          break;
        case "6":
          results.textContent = 6;
          break;
        case "7":
          results.textContent = 7;
          break;
        case "8":
          results.textContent = 8;
          break;
        case "9":
          results.textContent = 9;
          break;
        case "0":
          results.textContent = 0;
          break;
      }
    });
  });
};
