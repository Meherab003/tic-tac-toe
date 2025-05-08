const Square = ({ value, onSquareClick }) => {
  return (
    <>
      <button
        className="h-[100px] rounded-lg bg-[#3d1558]"
        onClick={onSquareClick}
      >
        {value === "X" ? (
          <div className="text-6xl font-bold text-[#72cff9]">X</div>
        ) : value === "O" ? (
          <div className="text-6xl font-bold text-[#dcbf3f]">O</div>
        ) : null}
      </button>
    </>
  );
};

export default Square;
