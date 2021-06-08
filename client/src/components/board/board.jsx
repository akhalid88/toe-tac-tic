import Square from "../square/square";
import "./board.css";

function Board() {
	const nextPlayer = 'Next Player: X';
	return (
		<div>
			<div className="status">{nextPlayer}</div>
			<div className="board-row">
				<Square pos={1} />
				<Square pos={2} />
				<Square pos={3} />
			</div>
			<div className="board-row">
				<Square pos={4} />
				<Square pos={5} />
				<Square pos={6} />
			</div>
			<div className="board-row">
				<Square pos={7} />
				<Square pos={8} />
				<Square pos={9} />
			</div>
		</div>
	)
}

export default Board;