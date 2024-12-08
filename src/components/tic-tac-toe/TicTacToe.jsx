import React, { useState, useEffect } from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-red-900 float-left text-5xl h-24 w-24 p-0 text-center"
    >
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  const getWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  };

  const handleClick = (currentSquare) => {
    let cpySquares = [...squares];
    if (getWinner(squares) || cpySquares[currentSquare]) return;
    cpySquares[currentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  };

  const handleRestart = ()=> {
    setIsXTurn(true);
    setSquares(Array(9).fill(''))
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is a draw!  Please restart the game`);
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="bg-slate-800 p-10 rounded-lg flex flex-col w-96">
      <div>
        <Square
          value={squares[0]}
          onClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div>
        <Square
          value={squares[3]}
          onClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div>
        <Square
          value={squares[6]}
          onClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onClick={() => {
            handleClick(8);
          }}
        />
      </div>
      <h3 className="text-xl text-cyan-500 mt-2">{status}</h3>
      <button className="mt-2" onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default TicTacToe;
