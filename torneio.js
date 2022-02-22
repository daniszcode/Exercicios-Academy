function rpsGameWinner(game) {
  let lista;
  const jogoPlayerUm = game[0][1].toString().toLowerCase();
  const jogoPlayerDois = game[1][1].toString().toLowerCase();

  const strFormate = (str) => {
    const string = str.toString().toLowerCase();
    return string;
  };

  const validarJogadores = (game) => {
    game.length === 2
      ? true
      : console.log("WrongNumberOfPlayersError", game.length) + brake;
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
      strFormate(jogoPlayerUm) === "pe" ||
      strFormate(jogoPlayerUm) === "pa" ||
      (strFormate(jogoPlayerUm) === "te" &&
        strFormate(jogoPlayerDois) === "pe") ||
      strFormate(jogoPlayerDois) === "pa" ||
      strFormate(jogoPlayerDois) === "te"
    ) {
      validarJogadores(game);
      return criaLista(), regrasDoJogo();
    } else {
      console.log("NoSuchStrategyError");
    }
  }

  return torneio();
}

console.log(
  rpsGameWinner([
    ["Dave", "PE"],
    ["Pete", "PA"],
    ["Pete", "PA"],
  ])
); //=>

// Torneio
// No jogo Pedra-Papel-Tesoura (Jan-Ken-Po), cada jogador escolhe a estratégia que irá usar: Pedra(PE); Papel(PA) ou Tesoura(TE). As regras são que Pedra ganha de Tesoura, Tesoura ganha de Papel e Papel ganha de Pedra.

// Jogo entre 2 pessoas
// A entrada chamada JOGO é na forma de lista (Array), no qual cada elemento é outra lista (JOGADA) formada por 2 elementos: [<nome_do_jogador>, <estrategia_do_jogador>]
// Escreva um método que aceita uma lista com duas JOGADAS e se comporta da seguinte maneira:
// Se o número de jogadores não for igual a 2, lança o erro WrongNumberOfPlayersError
// Se algum jogador escolher uma estratégia que não seja "PE", "PA" ou "TE", ignorando se as letras são maiúsculas ou minúsculas, lança o erro NoSuchStrategyError
// Caso contrário, retorna a lista formada pelo jogador e sua estratégia. Se os dois jogadores usarem a mesma estratégia, o primeiro jogador vence
// Siga o modelo:
