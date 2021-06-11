import './App.css';
import Board from "./components/board/board";
import Square from "./components/square/square";
import { useState } from 'react';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const renderSquares = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          const nextSquares = squares.slice();
          nextSquares[i] = isXNext ? "X" : "O";
          setSquares(nextSquares);
          setIsXNext(!isXNext);
        }}
      >
      </Square>
    )
  }
  const currentPlayer = `Current Player: ${isXNext ? "X" : "O"}`;
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
          <div>Stats</div>
          <ol></ol>
        </div>
      </div>
    </div>
  );
}

export default App;
