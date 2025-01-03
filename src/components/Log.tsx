export default function Log({
  turns,
}: {
  turns: { square: { rowIndex: number; colIndex: number }; player: string }[];
}) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={index}>
          {turn.player} selected {turn.square.rowIndex}, {turn.square.colIndex}
        </li>
      ))}
    </ol>
  );
}
