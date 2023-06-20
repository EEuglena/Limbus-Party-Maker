import Selectors from "./Selectors";
import Characters from "./Characters";
import Sins from "./Sins";
import data from "../data.json";
import styles from "./Main.module.css";
import { useState } from "react";

function Main() {
	const [party, setParty] = useState([]);

	return (
		<div className={styles.main}>
			<Selectors data={data} setParty={setParty} />
			<Characters data={data} party={party} setParty={setParty} />
			<Sins data={data} party={party} />
		</div>
	);
}

export default Main;
