function rpsGameWinner(game) {
  let lista;
  const jogoPlayerUm = game[0][1].toString().toLowerCase();
  const jogoPlayerDois = game[1][1].toString().toLowerCase();

  const strFormate = (str) => {
    const string = str.toString().toLowerCase();
    return string;
  };

  const validarJogadores = (game) => {
    if (game.length === 2) {
      true;
    } else {
      throw new Error("WrongNumberOfPlayersError");
    }
  };

  const criaLista = () => {
    lista = [...game];
    return console.log(lista);
  };

  const regrasDoJogo = () => {
    if (
      (jogoPlayerUm === "pa" && jogoPlayerDois === "pe") ||
      (jogoPlayerUm === "te" && jogoPlayerDois === "pa") ||
      (jogoPlayerUm === "pe" && jogoPlayerDois === "te")
    ) {
      return console.log(
        "O Jogador",
        game[0][0],
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
        game[1][0],
        "venceu!",
        jogoPlayerDois,
        "Ganha de ",
        jogoPlayerUm
      );
    }

    if (jogoPlayerUm === jogoPlayerDois) {
      return console.log("O Jogador", game[0][0], "venceu!");
    }
  };

  function torneio() {
    if (
      (strFormate(jogoPlayerUm) === "pe" ||
        strFormate(jogoPlayerUm) === "pa" ||
        strFormate(jogoPlayerUm) === "te") &&
      (strFormate(jogoPlayerDois) === "pe" ||
        strFormate(jogoPlayerDois) === "pa" ||
        strFormate(jogoPlayerDois) === "te")
    ) {
      validarJogadores(game);
      return criaLista(), regrasDoJogo();
    } else {
      throw new Error("NoSuchStrategyError");
    }
  }

  return torneio();
}

rpsGameWinner([
  ["Dave", "PE"],
  ["Pete", "Pa"],
]);
