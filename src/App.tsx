import { useState } from "react";
import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";

type Player = "X" | "O";

function App() {
  const [activePlayer, setActivePlayer] = useState<Player>("X");
  const [gameTurns, setGameTurns] = useState<
    { square: { rowIndex: number; colIndex: number }; player: string }[]
  >([]);

  function handleChangeSquer(rowIndex: number, colIndex: number) {
    setActivePlayer(() => {
      if (activePlayer === "X") {
        return "O";
      }
      return "X";
    });

    setGameTurns((prevState) => {
      let symbol = "X";
      if (prevState.length > 0 && prevState[0].player === "X") {
        symbol = "O";
      }
      const updatedGameTurns = [
        { square: { rowIndex, colIndex }, player: symbol },
        ...prevState,
      ];

      return updatedGameTurns;
    });
  }

  return (
    <main className="w-full h-screen bg-bgImage bg-yellow-400 bg-repeat bg-[200px]">
      <header className="flex flex-col w-full items-center justify-center py-10">
        <img src="/images/game-logo.png" alt="" className="w-52" />
        <h1 className="text-6xl font-extrabold">Tic-Tac-Toe</h1>
      </header>
      <div className="bg-gray-800 w-1/2 mx-auto p-9 rounded-xl">
        <ol className="flex items-center justify-between ">
          <PlayerInfo
            playerName="PLAYER 1"
            playerSymbol="X"
            isActive={activePlayer === "X"}
          />
          <PlayerInfo
            playerName="PLAYER 2"
            playerSymbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          handleChangeSquer={handleChangeSquer}
          gameTurns={gameTurns}
        />
      </div>
    </main>
  );
}

export default App;
