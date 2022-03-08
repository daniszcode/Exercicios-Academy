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

let playersWinBatalhaDois = [];
playersWin.map((player) => {
  // console.log("player: ", player);
  // console.log("playersWin: ", playersWin);

  const regrasDoJogo = (
    jogoPlayerUm = playersWin[1][1],
    jogoPlayerDois = playersWin[2][1],
    jogoPlayerTres = playersWin[3][1],
    jogoPlayerQuatro = playersWin[4][1],
    jogoPlayerCinco = playersWin[5][1],
    jogoPlayerSeis = playersWin[6][1]
  ) => {
    const strFormate = (str) => {
      const string = str.toString().toLowerCase();
      return string;
    };

    // console.log("jogoPlayerUm: @@@@@", jogoPlayerUm);
    if (
      (strFormate(jogoPlayerUm) === "pa" &&
        strFormate(jogoPlayerDois) === "pe") ||
      (strFormate(jogoPlayerUm) === "te" &&
        strFormate(jogoPlayerDois) === "pa") ||
      (strFormate(jogoPlayerUm) === "pe" && strFormate(jogoPlayerDois) === "te")
    ) {
      playersWinBatalhaDois.push([playersWin[1][0], playersWin[1][1]]);
    }
    if (
      (strFormate(jogoPlayerTres) === "pa" &&
        strFormate(jogoPlayerQuatro) === "pe") ||
      (strFormate(jogoPlayerTres) === "te" &&
        strFormate(jogoPlayerQuatro) === "pa") ||
      (strFormate(jogoPlayerTres) === "pe" &&
        strFormate(jogoPlayerQuatro) === "te")
    ) {
      playersWinBatalhaDois.push([playersWin[3][0], playersWin[3][1]]);
    }
    if (
      (strFormate(jogoPlayerDois) === "pa" &&
        strFormate(jogoPlayerUm) === "pe") ||
      (strFormate(jogoPlayerDois) === "te" &&
        strFormate(jogoPlayerUm) === "pa") ||
      (strFormate(jogoPlayerDois) === "pe" && strFormate(jogoPlayerUm) === "te")
    ) {
      playersWinBatalhaDois.push([playersWin[2][0], playersWin[2][1]]);
    }
    if (
      (strFormate(jogoPlayerQuatro) === "pa" &&
        strFormate(jogoPlayerTres) === "pe") ||
      (strFormate(jogoPlayerQuatro) === "te" &&
        strFormate(jogoPlayerTres) === "pa") ||
      (strFormate(jogoPlayerQuatro) === "pe" &&
        strFormate(jogoPlayerTres) === "te")
    ) {
      playersWinBatalhaDois.push([playersWin[4][0], playersWin[4][1]]);
    }
    if (
      (strFormate(jogoPlayerCinco) === "pa" &&
        strFormate(jogoPlayerSeis) === "pe") ||
      (strFormate(jogoPlayerCinco) === "te" &&
        strFormate(jogoPlayerSeis) === "pa") ||
      (strFormate(jogoPlayerCinco) === "pe" &&
        strFormate(jogoPlayerSeis) === "te")
    ) {
      playersWinBatalhaDois.push([playersWin[5][0], playersWin[5][1]]);
    }
    if (
      (strFormate(jogoPlayerSeis) === "pa" &&
        strFormate(jogoPlayerCinco) === "pe") ||
      (strFormate(jogoPlayerSeis) === "te" &&
        strFormate(jogoPlayerCinco) === "pa") ||
      (strFormate(jogoPlayerSeis) === "pe" &&
        strFormate(jogoPlayerCinco) === "te")
    ) {
      playersWinBatalhaDois.push([playersWin[6][0], playersWin[6][1]]);
    }

    return playersWinBatalhaDois;
  };
  console.log("Vencedores da segunda rodada: ", regrasDoJogo());
});
let playersWinBatalhaTres = [];

playersWinBatalhaDois.map((player) => {
  console.log("players batalha 3:", player);

  const regrasDoJogo = (
    jogoPlayerUm = playersWinBatalhaDois[0][1],
    jogoPlayerDois = playersWinBatalhaDois[1][1],
    jogoPlayerTres = playersWinBatalhaDois[2][1],
    jogoPlayerQuatro = false,
    jogoPlayerCinco = false,
    jogoPlayerSeis = false
  ) => {
    const strFormate = (str) => {
      const string = str.toString().toLowerCase();
      return string;
    };

    // console.log("jogoPlayerUm: @@@@@", jogoPlayerDois);
    if (
      (strFormate(jogoPlayerUm) === "pa" &&
        strFormate(jogoPlayerDois) === "pe") ||
      (strFormate(jogoPlayerUm) === "te" &&
        strFormate(jogoPlayerDois) === "pa") ||
      (strFormate(jogoPlayerUm) === "pe" && strFormate(jogoPlayerDois) === "te")
    ) {
      playersWinBatalhaTres.push([playersWin[1][0], playersWin[1][1]]);
    }
    if (
      (strFormate(jogoPlayerTres) === "pa" &&
        strFormate(jogoPlayerQuatro) === "pe") ||
      (strFormate(jogoPlayerTres) === "te" &&
        strFormate(jogoPlayerQuatro) === "pa") ||
      (strFormate(jogoPlayerTres) === "pe" &&
        strFormate(jogoPlayerQuatro) === "te")
    ) {
      playersWinBatalhaTres.push([playersWin[3][0], playersWin[3][1]]);
    }
    if (
      (strFormate(jogoPlayerDois) === "pa" &&
        strFormate(jogoPlayerUm) === "pe") ||
      (strFormate(jogoPlayerDois) === "te" &&
        strFormate(jogoPlayerUm) === "pa") ||
      (strFormate(jogoPlayerDois) === "pe" && strFormate(jogoPlayerUm) === "te")
    ) {
      playersWinBatalhaTres.push([playersWin[2][0], playersWin[2][1]]);
    }
    if (
      (strFormate(jogoPlayerQuatro) === "pa" &&
        strFormate(jogoPlayerTres) === "pe") ||
      (strFormate(jogoPlayerQuatro) === "te" &&
        strFormate(jogoPlayerTres) === "pa") ||
      (strFormate(jogoPlayerQuatro) === "pe" &&
        strFormate(jogoPlayerTres) === "te")
    ) {
      playersWinBatalhaTres.push([playersWin[4][0], playersWin[4][1]]);
    }
    if (
      (strFormate(jogoPlayerCinco) === "pa" &&
        strFormate(jogoPlayerSeis) === "pe") ||
      (strFormate(jogoPlayerCinco) === "te" &&
        strFormate(jogoPlayerSeis) === "pa") ||
      (strFormate(jogoPlayerCinco) === "pe" &&
        strFormate(jogoPlayerSeis) === "te")
    ) {
      playersWinBatalhaTres.push([playersWin[5][0], playersWin[5][1]]);
    }
    if (
      (strFormate(jogoPlayerSeis) === "pa" &&
        strFormate(jogoPlayerCinco) === "pe") ||
      (strFormate(jogoPlayerSeis) === "te" &&
        strFormate(jogoPlayerCinco) === "pa") ||
      (strFormate(jogoPlayerSeis) === "pe" &&
        strFormate(jogoPlayerCinco) === "te")
    ) {
      playersWinBatalhaTres.push([playersWin[6][0], playersWin[6][1]]);
    }

    return playersWinBatalhaTres;
  };
  console.log("Vencedores da Terceira rodada: ", regrasDoJogo());
});

// Final ####################
// Regex
