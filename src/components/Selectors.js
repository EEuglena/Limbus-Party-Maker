import Selector from "./Selector";
import styles from "./Selectors.module.css";

function Selectors({ data, party, setParty }) {
	return (
		<div>
			<div className={styles.selectors}>
				{data.slice(0, 6).map((item) => {
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
			<div className={styles.selectors}>
				{data.slice(6, 12).map((item) => {
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
		</div>
	);
}

export default Selectors;
