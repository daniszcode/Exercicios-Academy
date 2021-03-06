// Anagramas
// Um anagrama é uma palavra obtida por meio do rearranjo das letras de outras palavras. Por exemplo, "rats", "tars" e "star" são um grupo de anagramas pois são compostos pelas mesmas letras.
// Dado um Array de Strings, escreva um método que agrupa as Strings em grupos de anagramas e retorna esses grupos. Letras maiúsculas e minúsculas podem ser tratadas como se fossem iguais, mas o retorno deve manter as letras maiúsculas e minúsculas. A ordem dos grupos ou das Strings não importa.
// Exemplo de utilização:

// let str;
// let group = [];
// let removePalavra;
// let newStr;

// function combineAnagrams(words) {
//   str = words.toString();
//   console.log("str: ", str);
//   words.map((palavra) => {
//     console.log("palavra", palavra);
//     const indice = words.indexOf(palavra);
//     console.log("indice", indice);
//     removePalavra = words.splice(indice, 1);
//     console.log("remove palavra", removePalavra);
//     console.log("array", words);
//     newStr = words.toString();
//     console.log("new string", newStr);
//     console.log("match", palavra.match(/a-b/gi));
//     if (newStr.match(/a-b/gi)) {
//       group = group + palavra;
//     }

//     console.log(group); // console.log("Esse é o default", defaultt);
//     // console.log(str.match(defaultt));
//   });

//   return group;
// }

let retorno = [];
let arrCopia = [];
let aux = [];
let c;

function combineAnagrams(words) {
  arrCopia = [...words];

  for (c = 0; c < arrCopia.length; c++) {
    const separaPalavra = arrCopia[c].split("");
    const tamPalavra = separaPalavra.length;

    words.map((palavra) => {
      const separaPalavraMap = palavra.split("");
      const tamPalavraMap = separaPalavraMap.length;

      if (tamPalavra === tamPalavraMap) {
        if (
          separaPalavra.filter((letra) => separaPalavraMap.includes(letra))
            .length === tamPalavra
        ) {
          aux.push(palavra);
          const indice = arrCopia.indexOf(palavra);
          arrCopia.splice(indice, 1);
        }
      }
    });
    retorno.push(aux);
    aux = [];
    c = c - 1;
  }
  return retorno;
}

console.log(
  combineAnagrams([
    "CaRs",
    "racs",
    "scar",
    "foR",
    "poTatos",
    "creams",
    "scream",
  ])
);
