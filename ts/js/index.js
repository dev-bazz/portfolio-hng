import { add } from "./functions";
const me = {
    name: "Bazuaye",
    age: 20,
};
const mr = {
    id: "",
};
document.addEventListener("DOMContentLoaded", () => {
    console.log(`Dom content has loaded.
	Javascript is running
	`);
    console.log(add(3));
});
