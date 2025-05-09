import { useState } from "react";
import Board from "./components/Board";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (move) => {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move # ${move}`;
    } else {
      description = "Start the game first";
    }
    return (
      <li key={move}>
        <button
          className="bg-[#3d1558] py-3 px-4 text-white font-medium rounded-lg cursor-pointer w-60 md:w-96"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });
  return (
    <div className="bg-[#27033d] w-full min-h-screen flex flex-col lg:flex-row justify-between items-center gap-10  py-10">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      {/* History */}
      <div className="lg:min-h-96 lg:w-1/2 flex-1 flex flex-col justify-start items-center gap-5">
        <div className="text-xl mb-5 bg-[#a85a1a] w-[150px] h-10 text-white relative">
          <div className="bg-[#a85a1a] absolute -bottom-3 w-10 h-8 -left-6">
            <div className="bg-[#27033d] h-8 w-8 rotate-45 absolute -left-5"></div>
          </div>
          <div className="bg-[#a85a1a] absolute -bottom-3 w-10 h-8 -right-6">
            <div className="bg-[#27033d] h-8 w-8 rotate-45 absolute -right-5"></div>
          </div>
          <h2 className="z-20 w-full absolute bg-[#a85a1a] h-full flex items-center justify-center shadow-xl shadow-slate-950">
            History:
          </h2>
        </div>
        <ol className="flex flex-col justify-center items-center gap-2">
          {moves}
        </ol>
      </div>
    </div>
  );
}

export default App;
