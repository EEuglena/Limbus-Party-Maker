import Ego from "./Ego";
import Identity from "./Identity";
import styles from "./Character.module.css";

function Character({ character }) {
	return (
		<div className={styles.character}>
			<img className={styles.image} src="img/image.png" alt="icon" />
			<p>{character.name}</p>
			<Identity identities={character.identities} />
			<Ego id="zayin" grade="ZAYIN" egos={character.zayin} />
			<Ego id="teth" grade="TETH" egos={character.teth} />
			<Ego id="he" grade="HE" egos={character.he} />
			<Ego id="waw" grade="WAW" egos={character.waw} />
			<Ego id="aleph" grade="ALEPH" egos={character.aleph} />
		</div>
	);
}

export default Character;
