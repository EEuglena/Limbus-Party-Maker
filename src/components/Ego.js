import PropTypes from "prop-types";

function Ego({ grade }) {
	return (
		<div>
			<select>
				<option>Choose {grade}-grade E.G.O.</option>
			</select>
		</div>
	);
}

Ego.propTypes = {
	grade: PropTypes.string,
};

export default Ego;
