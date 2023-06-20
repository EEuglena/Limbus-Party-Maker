import styles from "./Identity.module.css";

function Identity({ identities, setParty, setIdentity }) {
	return (
		<select
			className={styles.selectbar}
			onChange={(event) => {
				const identityIndex = event.target.selectedIndex - 1;
				setIdentity(() => identities[identityIndex].name);

				setParty((cur) => {
					const id = event.target.parentElement.id;
					const result = [...cur];
					const index = cur.findIndex((item) => item.name === id);
					result[index]["identity"] = identityIndex;
					return result;
				});
			}}
			defaultValue={0}
		>
			<option className={styles.placeholder} value={-1} disabled>
				인격을 선택하세요.
			</option>
			{identities
				? identities.map((item, index) => (
						<option key={index}>{item.name}</option>
				  ))
				: null}
		</select>
	);
}

export default Identity;
