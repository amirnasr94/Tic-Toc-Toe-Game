import { useRef, useState } from "react";

export default function PlayerInfo({
  playerName,
  playerSymbol,
  isActive,
}: {
  playerName: string;
  playerSymbol: string;
  isActive: boolean;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [pName, setPName] = useState(playerName);

  const ref = useRef<HTMLInputElement>(null);

  return (
    <li className={`space-x-10 `}>
      <input
        ref={ref}
        type="text"
        readOnly={isEditing ? false : true}
        className={`text-white bg-black w-[250px] p-2 rounded-lg text-2xl focus:border focus:border-blue-600 ${isActive ? 'border border-yellow-50' : ''}`}
        value={pName}
        required
        onChange={(e) => setPName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setIsEditing(false);
          }
        }}
      />
      <span className="text-white text-xl font-extrabold">{playerSymbol}</span>
      <button
        className="text-yellow-400 w-10"
        onClick={() => {
          setIsEditing((prevState) => !prevState);
          ref?.current?.focus();
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
