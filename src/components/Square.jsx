const Square = ({ value, onSquareClick }) => {
  return (
    <>
      <button
        className="w-16 h-16 border border-gray-500 m-1"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
