import PlayerInfo from "./components/PlayerInfo";

function App() {
  return (
    <main className="w-full h-screen bg-bgImage bg-yellow-400 bg-repeat bg-[200px]">
      <header className="flex flex-col w-full items-center justify-center py-10">
        <img src="/images/game-logo.png" alt="" className="w-52" />
        <h1 className="text-6xl font-extrabold">Tic-Tac-Toe</h1>
      </header>
      <div className="bg-gray-800 w-1/2 mx-auto p-9 rounded-xl">
        <ol className="flex items-center justify-between ">
          <PlayerInfo playerName="PLAYER 1" playerSymbol="X"/>
          <PlayerInfo playerName="PLAYER 2" playerSymbol="O"/>
        </ol>
      </div>
    </main>
  );
}

export default App;
