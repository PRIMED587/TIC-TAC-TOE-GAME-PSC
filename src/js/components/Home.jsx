// src/js/components/Home.jsx
import React, { useState } from "react";
import Board from "./Board";

const Home = () => {
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");
  const [startGame, setStartGame] = useState(false);

  const handleStart = () => {
    if (playerX.trim() !== "" && playerO.trim() !== "") {
      setStartGame(true);
    } else {
      alert("Por favor ingresa los nombres de ambos jugadores.");
    }
  };

  const handleReset = () => {
    setPlayerX("");
    setPlayerO("");
    setStartGame(false);
  };

  return (
    <div className="container text-center mt-5">
      {!startGame ? (
        <div className="mb-4">
          <div id="tictactoe">
          <h1>Tic</h1> 
          <h3>Tac</h3> 
          <h2>Toe</h2>
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Nombre del jugador para X"
              className="form-control mb-2 w-25 m-auto"
              value={playerX}
              onChange={(e) => setPlayerX(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nombre del jugador para O"
              className="form-control mb-2 w-25 m-auto"
              value={playerO}
              onChange={(e) => setPlayerO(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleStart}>
              Comenzar Juego
            </button>
          </div>
        </div>
      ) : (
        <Board playerX={playerX} playerO={playerO} onReset={handleReset} />
      )}
    </div>
  );
};

export default Home;