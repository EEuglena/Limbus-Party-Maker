import Character from "./Character";
import styles from "./Characters.module.css";

function Characters({ characters }) {
	return (
		<div className={styles.characters}>
			{characters.map((item, index) => {
				return <Character key={index} character={item} />;
			})}
		</div>
	);
}

export default Characters;
