import "./board.css";

function Board(props) {
	
	return (
		<div>
			
			<div className="board-row">
				{props.renderSquares(1)}
				{props.renderSquares(2)}
				{props.renderSquares(3)}
			</div>
			<div className="board-row">
				{props.renderSquares(4)}
				{props.renderSquares(5)}
				{props.renderSquares(6)}
			</div>
			<div className="board-row">
				{props.renderSquares(7)}
				{props.renderSquares(8)}
				{props.renderSquares(9)}
			</div>
		</div>
	)
}

export default Board;