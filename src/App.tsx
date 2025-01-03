import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning_combination";
import GameOver from "./components/GameOver";

interface GameTurns {
  square: { rowIndex: number; colIndex: number };
  player: string;
}
const initilalValue: any[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function activePlayer(gameTurns: GameTurns[]) {
  let symbol = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    symbol = "O";
  }

  return symbol;
}

function App() {
  const [gameTurns, setGameTurns] = useState<GameTurns[]>([]);
  const [hasWinner, setHasWinner] = useState(false);

  const symbol = activePlayer(gameTurns);

  let gameBoard = initilalValue;

  for (const turn of gameTurns) {
    const {
      square: { rowIndex, colIndex },
      player,
    } = turn;

    initilalValue[rowIndex][colIndex] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const first_combination =
      gameBoard[combination[0].row][combination[0].column];
    const seccond_combination =
      gameBoard[combination[1].row][combination[1].column];
    const third_combination =
      gameBoard[combination[2].row][combination[2].column];
    if (
      first_combination &&
      first_combination == seccond_combination &&
      first_combination === third_combination
    ) {
      winner = symbol;
    }
  }

  function handleChangeSquare(rowIndex: number, colIndex: number) {
    if (hasWinner) return;
    setGameTurns((prevState) => {
      const symbol = activePlayer(prevState);
      const updatedGameTurns = [
        { square: { rowIndex, colIndex }, player: symbol },
        ...prevState,
      ];

      return updatedGameTurns;
    });
  }

  return (
    <>
      <main className="w-full  bg-bgImage bg-yellow-400 bg-repeat bg-[200px]">
        <header className="flex flex-col w-full items-center justify-center py-10">
          <img src="/images/game-logo.png" alt="" className="w-52" />
          <h1 className="text-6xl font-extrabold">Tic-Tac-Toe</h1>
        </header>
        <div className="bg-gray-800 w-1/2 mx-auto p-9 rounded-xl">
          <ol className="flex items-center justify-between ">
            <PlayerInfo
              playerName="PLAYER 1"
              playerSymbol="X"
              isActive={symbol === "X"}
            />
            <PlayerInfo
              playerName="PLAYER 2"
              playerSymbol="O"
              isActive={symbol === "O"}
            />
          </ol>
          {winner && (
            <p className="text-white text-lg font-bold mt-3">
              You won, {winner}!
            </p>
          )}
          <GameBoard handleChangeSquer={handleChangeSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
      <GameOver />
    </>
  );
}

export default App;
