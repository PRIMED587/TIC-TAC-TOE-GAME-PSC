import React, { useState } from "react";
import Square from "./Square";


const Board = ({ playerX, playerO, onReset }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = [...squares];
    newSquares[index] = isXTurn ? "X" : "O";
    setSquares(newSquares);
    setIsXTurn(!isXTurn);
    checkWinner(newSquares);
  };

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a]);
        return;
      }
    }
  };

  const renderStatus = () => {
    if (winner) {
      return <h4 className="mt-3">"{winner === "X" ? playerX : playerO}" ha ganado la partida</h4>;
    } else if (!squares.includes(null)) {
      return <h4 className="mt-3">La jugada ha quedado en empate, empieza una nueva partida</h4>;
    } else {
      return <h4 className="mt-3">Turno de: {isXTurn ? playerX : playerO}</h4>;
    }
  };

  return (
    <div>
      <div className="board d-grid">
        {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      {renderStatus()}
      {(winner || !squares.includes(null)) && (
        <button id="nuevaPartidaButton"className="btn btn-secondary mt-3" onClick={onReset}>
          Jugar Nueva Partida
        </button>
      )}
    </div>
  );
};

export default Board;