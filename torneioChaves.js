let players = [
  [
    [
      ["Harry", "PE"],
      ["Ronny", "TE"],
    ],
    [
      ["Hermione", "PA"],
      ["Luna", "TE"],
    ],
  ],

  [
    [
      ["Gina", "TE"],
      ["Arthur", "TE"],
    ],
    [
      ["Dino", "PA"],
      ["Simas", "PE"],
    ],
  ],

  [
    [
      ["Jorge", "TE"],
      ["Fred", "TE"],
    ],
    [
      ["Lilian", "PA"],
      ["Thiago", "PE"],
    ],
  ],
];

let playersWin = [[]];

const strFormate = (str) => {
  const string = str.toString().toLowerCase();
  return string;
};

//1° Rodada ########################

for (let player of players) {
  const regrasDoJogo = (
    jogoPlayerUm = player[0][0][1],
    jogoPlayerDois = player[0][1][1],
    jogoPlayerTres = player[1][0][1],
    jogoPlayerQuatro = player[1][1][1]
  ) => {
    if (
      (strFormate(jogoPlayerUm) === "pa" &&
        strFormate(jogoPlayerDois) === "pe") ||
      (strFormate(jogoPlayerUm) === "te" &&
        strFormate(jogoPlayerDois) === "pa") ||
      (strFormate(jogoPlayerUm) === "pe" && strFormate(jogoPlayerDois) === "te")
    ) {
      playersWin.push(player[0][0]);
    }
    if (
      (strFormate(jogoPlayerTres) === "pa" &&
        strFormate(jogoPlayerQuatro) === "pe") ||
      (strFormate(jogoPlayerTres) === "te" &&
        strFormate(jogoPlayerQuatro) === "pa") ||
      (strFormate(jogoPlayerTres) === "pe" &&
        strFormate(jogoPlayerQuatro) === "te")
    ) {
      playersWin.push(player[1][0]);
    }
    if (
      (strFormate(jogoPlayerDois) === "pa" &&
        strFormate(jogoPlayerUm) === "pe") ||
      (strFormate(jogoPlayerDois) === "te" &&
        strFormate(jogoPlayerUm) === "pa") ||
      (strFormate(jogoPlayerDois) === "pe" && strFormate(jogoPlayerUm) === "te")
    ) {
      playersWin.push(player[1][0]);
    }
    if (
      (strFormate(jogoPlayerQuatro) === "pa" &&
        strFormate(jogoPlayerTres) === "pe") ||
      (strFormate(jogoPlayerQuatro) === "te" &&
        strFormate(jogoPlayerTres) === "pa") ||
      (strFormate(jogoPlayerQuatro) === "pe" &&
        strFormate(jogoPlayerTres) === "te")
    ) {
      playersWin.push(player[1][1]);
    }

    if (jogoPlayerUm === jogoPlayerDois) {
      playersWin.push(player[0][0]);
      // console.log("O Jogador", player[0][0], "venceu!");
    }
    return playersWin;
  };
  console.log("Vencedores da primeira rodada: ", regrasDoJogo());
}

// Segunda Rodada ##############################

let playersWinBatalhaDois = [[]];
playersWin.map((player) => {
  console.log("player do map ", player);
  const indice = playersWin.indexOf(player);
  console.log("indice", indice);
  //   if (indice <= 2) {
  //     batalha.push(player);
  //     console.log("Batalha: ", batalha);
  //     regrasDoJogo(batalha[2], batalha[3]);
});

// Final ####################
