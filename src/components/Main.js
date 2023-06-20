import Selectors from "./Selectors";
import Characters from "./Characters";
import Sins from "./Sins";
import data from "../data.json";
import styles from "./Main.module.css";

function Main() {
	return (
		<div className={styles.main}>
			<Selectors />
			<Characters characters={data} />
			<Sins />
		</div>
	);
}

export default Main;
