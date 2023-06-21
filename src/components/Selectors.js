import Selector from "./Selector";
import styles from "./Selectors.module.css";

function Selectors({ data, party, setParty }) {
	return (
		<div className={styles.selectors}>
			{data.map((item) => {
				return (
					<Selector
						key={item.name}
						party={party}
						character={item}
						setParty={setParty}
					/>
				);
			})}
		</div>
	);
}

export default Selectors;
