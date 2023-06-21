import styles from "./Selector.module.css";

function Selector({ character, party, setParty }) {
	return (
		<div id={character.name} className={styles.selector}>
			<img
				className={styles.img}
				src={`${process.env.PUBLIC_URL}/img/${character.name}/icon.webp`}
				alt={`${character.name}/icon`}
				onClick={(event) => {
					const clickedName = event.target.parentElement.id;
					setParty((cur) => {
						if (cur.find((item) => item.name === clickedName))
							return cur.filter(
								(item) => item.name !== clickedName
							);
						else {
							if (cur.length >= 5) return cur;

							return [
								...cur,
								{
									name: clickedName,
									identity: 0,
									egos: { zayin: 0 },
								},
							];
						}
					});
				}}
			/>
		</div>
	);
}

export default Selector;
