import Square from "../square/square";
import "./board.css";

function Board(props) {
	const nextPlayer = 'Next Player: X';
	return (
		<div>
			<div className="status">{nextPlayer}</div>
			<div className="board-row">
				<Square value={1} onClick={props.onCellClick}/>
				<Square value={2} onClick={props.onCellClick}/>
				<Square value={3} onClick={props.onCellClick}/>
			</div>
			<div className="board-row">
				<Square value={4} onClick={props.onCellClick}/>
				<Square value={5} onClick={props.onCellClick}/>
				<Square value={6} onClick={props.onCellClick}/>
			</div>
			<div className="board-row">
				<Square value={7} onClick={props.onCellClick}/>
				<Square value={8} onClick={props.onCellClick}/>
				<Square value={9} onClick={props.onCellClick}/>
			</div>
		</div>
	)
}

export default Board;