import { useState } from "react";

const initilalValue: any[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({
  handleChangeSquer,
  gameTurns,
}: {
  handleChangeSquer: (rowIndex: number, colIndex: number) => void;
  gameTurns: any;
}) {
  // const [gameBoard, setGameBoard] = useState(initilalValue);

  // const handleClick = (rowIndex: number, colIndex: number) => {
  //   setGameBoard((prevState) => {
  //     const copyOfState = [...prevState];
  //     copyOfState[rowIndex][colIndex] = activePlayer;
  //     return copyOfState;
  //   });
  //   handleChangePlayer()
  // };

  // console.log(gameBoard);
  let gameBoard = initilalValue;

  for (const turn of gameTurns) {
    const {
      square: { rowIndex, colIndex },
      player,
    } = turn;

    initilalValue[rowIndex][colIndex] = player;
  }

  return (
    <ol className="w-1/2 mx-auto mt-10 grid grid-cols-3">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li
                className="w-32 h-28 bg-gray-400 rounded-sm m-2"
                key={colIndex}
              >
                <button
                  className="w-full h-full text-black italic text-6xl font-extrabold"
                  onClick={() => handleChangeSquer(rowIndex, colIndex)}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
