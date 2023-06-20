import PropTypes from "prop-types";
import styles from "./Ego.module.css";

function Ego({ egos }) {
	return (
		<div>
			<select className={styles.selectbar} defaultValue={-1}>
				<option className={styles.placeholder} value={-1} disabled>
					에고를 선택하세요.
				</option>
				{egos.map((item, index) => (
					<option key={index}>{item.name}</option>
				))}
			</select>
		</div>
	);
}

Ego.propTypes = {
	grade: PropTypes.string,
};

export default Ego;
