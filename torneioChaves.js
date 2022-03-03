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

playersWin.map((player) => {
  console.log("player: ", player);
  console.log("playersWin: ", playersWin);

  let playersWinBatalhaDois = [[]];

  function regrasDoJogo(
    jogoPlayerUm = playersWin[1][1],
    jogoPlayerDois = playersWin[2][1],
    jogoPlayerTres = playersWin[3][1],
    jogoPlayerQuatro = playersWin[4][1],
    jogoPlayerCinco = playersWin[5][1],
    jogoPlayerSeis = playersWin[6][1]
  ) {
    const strFormate = (str) => {
      const string = str.toString().toLowerCase();
      return string;
    };

    console.log("jogoPlayerUm: @@@@@", jogoPlayerUm);
    if (
      (strFormate(jogoPlayerUm) === "pa" &&
        strFormate(jogoPlayerDois) === "pe") ||
      (strFormate(jogoPlayerUm) === "te" &&
        strFormate(jogoPlayerDois) === "pa") ||
      (strFormate(jogoPlayerUm) === "pe" && strFormate(jogoPlayerDois) === "te")
    ) {
      playersWinBatalhaDois.push(playersWin[1][0]);
    }
    if (
      (strFormate(jogoPlayerTres) === "pa" &&
        strFormate(jogoPlayerQuatro) === "pe") ||
      (strFormate(jogoPlayerTres) === "te" &&
        strFormate(jogoPlayerQuatro) === "pa") ||
      (strFormate(jogoPlayerTres) === "pe" &&
        strFormate(jogoPlayerQuatro) === "te")
    ) {
      playersWinBatalhaDois.push(playersWin[3][0]);
    }
    if (
      (strFormate(jogoPlayerDois) === "pa" &&
        strFormate(jogoPlayerUm) === "pe") ||
      (strFormate(jogoPlayerDois) === "te" &&
        strFormate(jogoPlayerUm) === "pa") ||
      (strFormate(jogoPlayerDois) === "pe" && strFormate(jogoPlayerUm) === "te")
    ) {
      playersWinBatalhaDois.push(playersWin[2][0]);
    }
    if (
      (strFormate(jogoPlayerQuatro) === "pa" &&
        strFormate(jogoPlayerTres) === "pe") ||
      (strFormate(jogoPlayerQuatro) === "te" &&
        strFormate(jogoPlayerTres) === "pa") ||
      (strFormate(jogoPlayerQuatro) === "pe" &&
        strFormate(jogoPlayerTres) === "te")
    ) {
      playersWinBatalhaDois.push(playersWin[4][0]);
    }
    if (
      (strFormate(jogoPlayerCinco) === "pa" &&
        strFormate(jogoPlayerSeis) === "pe") ||
      (strFormate(jogoPlayerCinco) === "te" &&
        strFormate(jogoPlayerSeis) === "pa") ||
      (strFormate(jogoPlayerCinco) === "pe" &&
        strFormate(jogoPlayerSeis) === "te")
    ) {
      playersWinBatalhaDois.push(playersWin[5][0]);
    }
    if (
      (strFormate(jogoPlayerSeis) === "pa" &&
        strFormate(jogoPlayerCinco) === "pe") ||
      (strFormate(jogoPlayerSeis) === "te" &&
        strFormate(jogoPlayerCinco) === "pa") ||
      (strFormate(jogoPlayerSeis) === "pe" &&
        strFormate(jogoPlayerCinco) === "te")
    ) {
      playersWinBatalhaDois.push(playersWin[6][0]);
    }
    // if (strFormate(jogoPlayerUm) === strFormate(jogoPlayerDois)) {
    //   playersWinBatalhaDois.push(player[0][0]);
    //   // console.log("O Jogador", player[0][0], "venceu!");
    // }
    return playersWinBatalhaDois;
  }
  console.log("Vencedores da segunda rodada: ", regrasDoJogo());
});

// Final ####################
