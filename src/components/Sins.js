import styles from "./Sins.module.css";
import Sin from "./Sin";

function Sins({ data, party }) {
	const sins = ["분노", "색욕", "나태", "탐식", "우울", "오만", "질투"];
	return (
		<div className={styles.sins}>
			{sins.map((item, index) => (
				<Sin
					key={index}
					id={index}
					data={data}
					img={item}
					party={party}
				/>
			))}
		</div>
	);
}

export default Sins;
