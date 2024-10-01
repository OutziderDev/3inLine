import { useState } from "react";
import "./index.css";

function Button({ value, onSquareClick }) {
  /* Componente de Boton */
  return (
    <button
      className="w-28 h-28 bg-white text-black text-5xl font-bold border border-sky-500 hover:bg-sky-50"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // funcion de estados para la matriz
  const [isNext, setIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const valorArray = squares.slice();
    valorArray[i] = isNext ? "X": "O";
    setSquares(valorArray)
    setIsNext(!isNext);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) status ="El ganador es: "+ winner; else status = "Es el turno de "+ (isNext ? "X" : "O")

  return (
    <>
      <h1 className="flex items-center justify-center font-bold text-4xl md:text-7xl  font-serif mt-9">
        <p className="font-mono mr-2">3 </p> In Line Game
      </h1>

      <div class="flex justify-center items-center min-h-[60vh]">
        <div className="grid grid-cols-3 bg-white shadow-lg shadow-blue-300 rounded-lg ">
          <Button value={squares[0]} onSquareClick={()=>handleClick(0)}/>
          <Button value={squares[1]} onSquareClick={()=>handleClick(1)}/>
          <Button value={squares[2]} onSquareClick={()=>handleClick(2)}/>
          <Button value={squares[3]} onSquareClick={()=>handleClick(3)}/>
          <Button value={squares[4]} onSquareClick={()=>handleClick(4)}/>
          <Button value={squares[5]} onSquareClick={()=>handleClick(5)}/>
          <Button value={squares[6]} onSquareClick={()=>handleClick(6)}/>
          <Button value={squares[7]} onSquareClick={()=>handleClick(7)}/>
          <Button value={squares[8]} onSquareClick={()=>handleClick(8)}/>
        </div>
      </div>

      <h4 className="flex items-center justify-center text-2xl mt-5 font-semibold" >{status}</h4>
    </>
  );
}

export default App;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}