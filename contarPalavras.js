let dictionary = {};

function countWords(palavra) {
  const strSeparada = palavra
    .toLowerCase()
    .normalize("NFD")
    .replace(/([\u0300-\u036f]|[^a-zA-Z ])/g, "")
    .split(" ");

  strSeparada.map((element) => {
    const comparacao = dictionary.hasOwnProperty(element);
    if (comparacao === true) {
      dictionary[element] = dictionary[element] + 1;
    } else {
      dictionary[element] = 1;
    }
  });
  return dictionary;
}
console.log(countWords("Doo bee doo bee doo")); // => { doo: 3, bee: 2 }
