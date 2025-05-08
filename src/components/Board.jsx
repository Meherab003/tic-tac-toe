import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  let winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = `Next Move is: ${xIsNext ? "X" : "O"}`;
  }
  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (squares[i] || winner) {
      return;
    }
    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-xl mb-5 bg-[#387e39] w-[65%] md:w-11/12 h-10 text-white relative">
        <div className="bg-[#387e39] absolute -bottom-3 w-10 h-8 -left-6">
          <div className="bg-[#27033d] h-8 w-8 rotate-45 absolute -left-5"></div>
        </div>
        <div className="bg-[#387e39] absolute -bottom-3 w-10 h-8 -right-6">
          <div className="bg-[#27033d] h-8 w-8 rotate-45 absolute -right-5"></div>
        </div>
        <h2
          className={`z-20 w-full absolute bg-[#387e39] h-full flex items-center justify-center shadow-xl shadow-slate-950 
            ${winner === "X" && "text-[#72cff9]"} ${
            winner === "O" && "text-[#dcbf3f]"
          }`}
        >
          {status}
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-2 w-[316px] p-2 rounded-3xl ">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />

        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />

        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;

const calculateWinner = (squares) => {
  let lines = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [6, 4, 2],
    [1, 4, 7],
    [2, 5, 8],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
