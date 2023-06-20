import styles from "./Identity.module.css";

function Identity({ identities }) {
	return (
		<select
			className={styles.selectbar}
			onChange={(event) => {
				const img = event.target.parentElement.querySelector("img");
				img.src = "img/" + identities[event.target.selectedIndex].img;
			}}
		>
			{identities
				? identities.map((item, index) => (
						<option key={index}>{item.name}</option>
				  ))
				: null}
		</select>
	);
}

export default Identity;
