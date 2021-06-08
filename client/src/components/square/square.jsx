import "./square.css";

function Square(props) {
	return (
		<button className="square">
			{props.pos}
		</button>
	)
}

export default Square;