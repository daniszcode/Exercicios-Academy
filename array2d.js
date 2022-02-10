// let ampulhetaUm = 0;
// let ampulhetaDois = 0;
// let ampulhetaTres = 0;
// let elements = 0;
// let retorno = 0;

// function hourglassSum(arr) {
//   arr.map((item) => {
//     const indice = arr.indexOf(item);
//     for (elements of item) {
//       const indiceElemento = arr.indexOf(elements);
//       if (indice <= 2 && indiceElemento <= 2 && elements !== 0) {
//         ampulhetaUm = ampulhetaUm + elements;
//       } else if (
//         indice <= 2 &&
//         indiceElemento >= 2 &&
//         indiceElemento <= 4 &&
//         elements !== 0
//       ) {
//         ampulhetaDois = ampulhetaDois + elements;
//       } else if (
//         indice <= 2 &&
//         indiceElemento >= 3 &&
//         indiceElemento <= 5 &&
//         elements !== 0
//       ) {
//         ampulhetaTres = ampulhetaTres + elements;
//       }
//     }
//     return console.log(ampulhetaUm, ampulhetaDois, ampulhetaTres);
//   });
//   if (ampulhetaUm > ampulhetaDois && ampulhetaUm > ampulhetaTres) {
//     return console.log("Retornei ampulheta 1: ", ampulhetaUm);
//   } else if (ampulhetaDois > ampulhetaUm && ampulhetaDois > ampulhetaTres) {
//     return console.log("Retornei ampulheta 2: ", ampulhetaDois);
//   } else if (ampulhetaTres > ampulhetaUm && ampulhetaDTres > ampulhetaDois) {
//     return console.log("Retornei ampulheta 2: ", ampulhetaTres);
//   }
// }

// console.log(
//   hourglassSum([
//     [1, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0],
//     [0, 0, 2, 4, 4, 0],
//     [0, 0, 0, 2, 0, 0],
//     [0, 0, 1, 2, 4, 0],
//   ])
// );

// 1° o codigo só está dando certo nos 3 primeirps arrays  e na primeira ampulheta
