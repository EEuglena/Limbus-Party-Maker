import Icon from "../img/image.png";
import Ego from "./Ego";

function Character() {
	return (
		<div>
			<img src={Icon} alt="icon" />
			<p>Character Name</p>
			<Ego grade="ZAYIN" />
		</div>
	);
}

export default Character;
