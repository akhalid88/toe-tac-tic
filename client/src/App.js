import './App.css';
import Board from "./components/board/board";
import { useState } from 'react';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const onCellClick = () => {
    alert('click');
  }

  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
          <Board
            onCellClick={onCellClick} />
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
