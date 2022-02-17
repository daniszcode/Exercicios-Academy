let dictionary = {};

function countWords(palavra) {
  const strSeparada = palavra
    .toLowerCase()
    .normalize("NFD")
    .replace(/([\u0300-\u036f]|[^a-zA-Z ])/g, "")
    .split(" ");

  strSeparada.map((element) => {
    const comparacao = dictionary.hasOwnProperty(element);
    console.log("comparacao: ", comparacao);
    console.log("dictyonary: ", dictionary);

    if (comparacao === true) {
      dictionary[element] = dictionary[element] + 1;
    } else {
      dictionary[element] = 1;
    }
  });
  return dictionary;
}
console.log(countWords("arroz feijão arroz c#")); // => { doo: 3, bee: 2 }
