import './App.css';
import Board from "./components/board/board";

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>Stats</div>
        <ol></ol>
      </div>
    </div>
  );
}

export default App;
