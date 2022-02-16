let ampulhetaZero = 0;
let ampulhetaUm = 0;
let ampulhetaDois = 0;
let ampulhetaTres = 0;
let elements;
let retorno = 0;

function hourglassSum(arr) {
  arr.map((item) => {
    const indice = arr.indexOf(item);
    for (elements of item) {
      const indiceElemento = item.indexOf(elements);

      if (
        indice <= 2 &&
        indiceElemento >= 0 &&
        indiceElemento <= 2 &&
        elements !== 0
      ) {
        ampulhetaZero = ampulhetaZero + elements;
      } else if (
        indice <= 2 &&
        indiceElemento >= 1 &&
        indiceElemento <= 3 &&
        elements !== 0
      ) {
        ampulhetaUm = ampulhetaUm + elements;
      } else if (
        indice <= 2 &&
        indiceElemento >= 2 &&
        indiceElemento <= 4 &&
        elements !== 0
      ) {
        ampulhetaDois = ampulhetaDois + elements;
      } else if (
        indice <= 2 &&
        indiceElemento >= 3 &&
        indiceElemento <= 5 &&
        elements !== 0
      ) {
        ampulhetaTres = ampulhetaTres + elements;
      }
    }
    return console.log(ampulhetaUm, ampulhetaDois, ampulhetaTres);
  });

  let retornoAmpulhetaZero;
  let retornoAmpulhetaUm;
  let retornoAmpulhetaUDois;
  let retornoAmpulhetaTres;

  retornoAmpulhetaZero =
    ampulhetaZero > ampulhetaUm &&
    ampulhetaZero > ampulhetaDois &&
    ampulhetaZero > ampulhetaTres
      ? (retornoAmpulhetaZero = ampulhetaZero)
      : false;

  retornoAmpulhetaUm =
    ampulhetaUm > ampulhetaZero &&
    ampulhetaUm > ampulhetaDois &&
    ampulhetaUm > ampulhetaTres
      ? (retornoAmpulhetaUm = ampulhetaUm)
      : false;

  retornoAmpulhetaUDois =
    ampulhetaDois > ampulhetaZero &&
    ampulhetaDois > ampulhetaUm &&
    ampulhetaDois > ampulhetaTres
      ? (retornoAmpulhetaUDois = ampulhetaDois)
      : false;

  retornoAmpulhetaTres =
    ampulhetaTres > ampulhetaZero &&
    ampulhetaTres > ampulhetaUm &&
    ampulhetaUm > ampulhetaDois
      ? (retornoAmpulhetaTres = ampulhetaTres)
      : false;

  return (
    retornoAmpulhetaZero ||
    retornoAmpulhetaUm ||
    retornoAmpulhetaUDois ||
    retornoAmpulhetaTres
  );
}

console.log(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);
