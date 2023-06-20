import Character from "./Character";
import styles from "./Characters.module.css";

function Characters({ data, party, setParty }) {
	return (
		<div className={styles.characters}>
			{data
				.filter((item) => party.find((obj) => obj.name === item.name))
				.map((item, index) => {
					return (
						<Character
							key={index}
							data={data}
							party={party}
							setParty={setParty}
							character={item}
						/>
					);
				})}
		</div>
	);
}

export default Characters;
