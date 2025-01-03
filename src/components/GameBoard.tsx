export default function GameBoard({
  handleChangeSquer,
  board,
}: {
  handleChangeSquer: (rowIndex: number, colIndex: number) => void;
  board: any[][];
}) {
  return (
    <ol className="w-1/2 mx-auto mt-10 grid grid-cols-3">
      {board.map((row, rowIndex) => (
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
                  disabled={col !== null}
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
