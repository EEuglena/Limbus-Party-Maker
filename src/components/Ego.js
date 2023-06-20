import PropTypes from "prop-types";
import styles from "./Ego.module.css";

function Ego({ grade, egos, setParty }) {
	return (
		<select
			className={styles.selectbar}
			defaultValue={grade === "zayin" ? 0 : -1}
			onChange={(event) => {
				const egoIndex = event.target.selectedIndex - 1;

				setParty((cur) => {
					const id = event.target.parentElement.id;
					const result = [...cur];
					const index = result.findIndex((item) => item.name === id);
					if (!result[index].hasOwnProperty("egos"))
						result[index]["egos"] = {};
					result[index]["egos"][grade] = egoIndex;

					return result;
				});
			}}
		>
			<option className={styles.placeholder} value={-1} disabled>
				에고를 선택하세요.
			</option>
			{egos.map((item, index) => (
				<option key={index}>{item.name}</option>
			))}
		</select>
	);
}

Ego.propTypes = {
	grade: PropTypes.string,
};

export default Ego;
