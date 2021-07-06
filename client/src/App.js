import './App.css';
import Board from "./components/board/board";
import Square from "./components/square/square";
import Restart from "./components/restart/restart";
import { useState, useEffect } from 'react';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState("");
  const nextPlayer = isXNext ? "X" : "O";

  useEffect(() => {
    calcWinner();
  }, []);


  const renderSquares = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          console.log(squares[i])
          if (squares[i] == null || winner == null) {
            const nextSquares = squares.slice();
            nextSquares[i] = nextPlayer;
            setSquares(nextSquares);
            setIsXNext(!isXNext);
          }
        }}
      >
      </Square>
    )
  }

  const renderRestart = () => {
    return (
      <Restart
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsXNext(true);
          setWinner(null);
        }}
      />
    )
  }
  const calcWinner = () => {
    // console.log("I AM HERE");
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
      // console.log(squares[a], squares[b], squares[c])
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        // if(squares[a] === squares[b] ===squares[c])
        setWinner(squares[a])
        // return squares[a];
      }
    }
    return null;
  }

  const isBoardFull = () => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
  }

  const getStatus = () => {
    if (winner) {
      return "Winner: " + winner;
    } else if (isBoardFull()) {
      return "Draw!";
    } else {
      return "Next Player: " + nextPlayer;
    }
  }



  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
          <Board
            renderSquares={renderSquares}
            isXNext={isXNext}
          />
        </div>
        <div className="stats">
          <div className="game-info">{getStatus()}</div>
          <div className="restart-button">{renderRestart()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
