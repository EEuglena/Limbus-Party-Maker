import styles from "./Selector.module.css";

function Selector({ character, setParty }) {
	return (
		<div id={character.name} className={styles.selector}>
			<img
				style={{ width: 100 }}
				src={`${process.env.PUBLIC_URL}/img/${character.name}/icon.webp`}
				alt={`${character.name}/icon`}
				onClick={(event) => {
					const clickedName = event.target.parentElement.id;
					setParty((cur) => {
						if (cur.find((item) => item.name === clickedName))
							return cur.filter(
								(item) => item.name !== clickedName
							);
						else
							return [
								...cur,
								{
									name: clickedName,
									identity: 0,
									egos: { zayin: 0 },
								},
							];
					});
				}}
			/>
		</div>
	);
}

export default Selector;
