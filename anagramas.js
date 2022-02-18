// Anagramas
// Um anagrama é uma palavra obtida por meio do rearranjo das letras de outras palavras. Por exemplo, "rats", "tars" e "star" são um grupo de anagramas pois são compostos pelas mesmas letras.
// Dado um Array de Strings, escreva um método que agrupa as Strings em grupos de anagramas e retorna esses grupos. Letras maiúsculas e minúsculas podem ser tratadas como se fossem iguais, mas o retorno deve manter as letras maiúsculas e minúsculas. A ordem dos grupos ou das Strings não importa.
// Exemplo de utilização:

let str;
let group = [];
let removePalavra;
let newStr;

function combineAnagrams(words) {
  str = words.toString();
  console.log("str: ", str);
  words.map((palavra) => {
    console.log("palavra", palavra);
    const indice = words.indexOf(palavra);
    console.log("indice", indice);
    removePalavra = words.splice(indice, 1);
    console.log("remove palavra", removePalavra);
    console.log("array", words);
    newStr = words.toString();
    console.log("new string", newStr);
    console.log("match", palavra.match(/a-b/gi));
    if (newStr.match(/a-b/gi)) {
      group = group + palavra;
    }

    console.log(group); // console.log("Esse é o default", defaultt);
    // console.log(str.match(defaultt));
  });

  return group;
}

console.log(combineAnagrams(["CaRs", "foR", "racs", "scar", "poTatos"])); // => //[ [ 'CaRs', 'racs', 'scar' ],  [ 'foR' ],  [ 'poTatos' ],  [ 'four' ],  [ 'creams', 'scream' ] ]

//regex <<
