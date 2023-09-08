import { man, test } from "./hell";
import { add } from "./functions";

const me: test = {
	name: "Bazuaye",
	age: 20,
};

const mr: man = {
	id: "",
};

document.addEventListener("DOMContentLoaded", () => {
	console.log(`Dom content has loaded.
	Javascript is running
	`);
	console.log(add(3));
});
