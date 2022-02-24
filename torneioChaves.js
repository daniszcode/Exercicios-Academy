let players = [
  [
    [
      ["Harry Potter", "PE"],
      ["Ronny Wesley", "TE"],
    ],
    [
      ["Hermione Granger", "PA"],
      ["Luna Lovegood", "TE"],
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

for (let c = 0; c < players.length; c++) {
  console.log(c);
  console.log("Esses são os players do for Externo", players[c]);

  for (let player of players) {
    console.log("Esses são os player do for INterno: ", player[c]);
    console.log("Posição 0: ", player[0][0], "posição 1: ", player[0][1]);

    const regrasDoJogo = (jogoPlayerUm, jogoPlayerDois) => {
      if (
        (jogoPlayerUm === "pa" && jogoPlayerDois === "pe") ||
        (jogoPlayerUm === "te" && jogoPlayerDois === "pa") ||
        (jogoPlayerUm === "pe" && jogoPlayerDois === "te")
      ) {
        return console.log(
          "O Jogador",
          player[0][0],
          "venceu!",
          jogoPlayerUm,
          "Ganha de ",
          jogoPlayerDois
        );
      }

      if (
        (jogoPlayerDois === "pa" && jogoPlayerUm === "pe") ||
        (jogoPlayerDois === "te" && jogoPlayerUm === "pa") ||
        (jogoPlayerDois === "pe" && jogoPlayerUm === "te")
      ) {
        return console.log(
          "O Jogador",
          player[1][0],
          "venceu!",
          jogoPlayerDois,
          "Ganha de ",
          jogoPlayerUm
        );
      }

      if (jogoPlayerUm === jogoPlayerDois) {
        return console.log("O Jogador", player[0][0], "venceu!");
      }

      return console.log(regrasDoJogo(player[0][0], player[0][1]));
    };
    console.log(regrasDoJogo(player[0][0], player[0][1]));
  }
}
