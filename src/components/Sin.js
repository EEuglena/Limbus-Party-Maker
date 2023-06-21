import { useEffect, useState } from "react";
import styles from "./Sin.module.css";

function Sin({ id, data, img, party }) {
	const [sum, setSum] = useState(0);
	const [req, setReq] = useState(0);
	useEffect(() => {
		setSum(0);
		setReq(0);
		party.map((item) => {
			const identityIndex = item?.identity;
			const egos = item?.egos;
			const character = data.find((obj) => obj.name === item.name);
			const add = character?.identities[identityIndex]?.skill[id];
			let temp = 0;
			if (egos) {
				Object.keys(egos).map(
					(grade) =>
						(temp +=
							character.egos[grade][egos[grade]].requirement[id])
				);
			}
			setSum((cur) => (add ? cur + add : cur));
			setReq((cur) => cur + temp);
			return 0;
		});
	}, [party, data, id]);
	return (
		<div className={styles.sin}>
			<img
				src={`${process.env.PUBLIC_URL}/img/${img}.webp`}
				alt={img}
				height={"30px"}
			/>
			<span
				className={`${styles.text} ${
					sum >= req ? styles.yes : styles.no
				}`}
			>
				{sum} / {req}
			</span>
		</div>
	);
}

export default Sin;
