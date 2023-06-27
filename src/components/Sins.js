import styles from "./Sins.module.css";
import Sin from "./Sin";

function Sins({ data, party }) {
	const sins = ["분노", "색욕", "나태", "탐식", "우울", "오만", "질투"];
	return (
		<div className={styles.sins}>
			<div className={styles.subsins}>
				{sins.slice(0, 4).map((item, index) => (
					<Sin
						key={index}
						id={index}
						data={data}
						img={item}
						party={party}
					/>
				))}
			</div>
			<div className={styles.subsins}>
				{sins.slice(4, 7).map((item, index) => (
					<Sin
						key={index}
						id={index}
						data={data}
						img={item}
						party={party}
					/>
				))}
			</div>
		</div>
	);
}

export default Sins;
