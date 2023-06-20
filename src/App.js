import Header from "./components/Header";
import Main from "./components/Main";
import styles from "./App.module.css";

function App() {
	return (
		<div>
			<header className={styles.header}>
				<Header />
			</header>
			<main className={styles.main}>
				<Main />
			</main>
		</div>
	);
}

export default App;
