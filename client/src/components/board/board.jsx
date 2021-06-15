import "./board.css";

function Board(props) {
	
	return (
		<div>
			<div className="board-row">
				{props.renderSquares(0)}
				{props.renderSquares(1)}
				{props.renderSquares(2)}
			</div>
			<div className="board-row">
				{props.renderSquares(3)}
				{props.renderSquares(4)}
				{props.renderSquares(5)}
			</div>
			<div className="board-row">
				{props.renderSquares(6)}
				{props.renderSquares(7)}
				{props.renderSquares(8)}
			</div>
		</div>
	)
}

export default Board;