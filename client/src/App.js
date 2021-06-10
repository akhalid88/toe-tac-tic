import './App.css';
import Board from "./components/board/board";
import Square from "./components/square/square";
import { useState } from 'react';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  // const onCellClick = () => {
  //   alert();
  // }

  const renderSquares = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          const nextSquares = squares.slice();
          nextSquares[i] = 'X';
          setSquares(nextSquares);
        }}
      >
      </Square>
    )
  }

  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
          <Board
            renderSquares={renderSquares} />
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
