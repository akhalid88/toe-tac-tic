import './App.css';
import Board from "./components/board/board";
import Square from "./components/square/square";
import { useState, useEffect } from 'react';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState("");
  const currentPlayer = `Current Player: ${isXNext ? "X" : "O"}`;

  useEffect(() => {
    calcWinner();
  }, [squares]);


  const renderSquares = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          const nextSquares = squares.slice();
          nextSquares[i] = isXNext ? "X" : "O";
          setSquares(nextSquares);
          // calcWinner(squares);
          setIsXNext(!isXNext);
        }}
      >
      </Square>
    )
  }

  const calcWinner = () => {
    console.log("I AM HERE");
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      console.log(squares[a], squares[b], squares[c])
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        // if(squares[a] === squares[b] ===squares[c])
        setWinner(squares[a])
        // return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="container">
      <div className="game">
        <div className="status">{currentPlayer}
          <div className="game-board">
            <Board
              renderSquares={renderSquares}
              isXNext={isXNext}
            />
          </div>
        </div>
        <div className="game-info">
          <div>Winner: {winner}</div>
          <ol></ol>
        </div>
      </div>
    </div>
  );
}

export default App;
