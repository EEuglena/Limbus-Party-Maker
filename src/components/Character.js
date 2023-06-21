import Ego from "./Ego";
import Identity from "./Identity";
import styles from "./Character.module.css";
import { useState } from "react";

function Character({ character, setParty }) {
	const grades = ["zayin", "teth", "he", "waw", "aleph"];
	const [identity, setIdentity] = useState("LCB 수감자");

	return (
		<div id={character.name} className={styles.container}>
			<img
				className={styles.image}
				src={`${process.env.PUBLIC_URL}/img/${character.name}/${identity}.webp`}
				alt={`${character.name}/${identity}`}
			/>
			<Identity
				identities={character.identities}
				setParty={setParty}
				setIdentity={setIdentity}
			/>
			<div className={styles.name}>{character.name}</div>
			{grades.map((grade, index) => {
				return (
					<Ego
						key={index}
						grade={grade}
						egos={character.egos[grade]}
						setParty={setParty}
					/>
				);
			})}
		</div>
	);
}

export default Character;
