import { domQuantity } from "./types";

document.addEventListener("DOMContentLoaded", () => {
	const dayOfTheWeek = getDomElement("one", ".day") as HTMLParagraphElement;
	const currentTime = new Date();
	const formatter = new Intl.DateTimeFormat("en-US", {
		weekday: "long",
		month: "long",
		year: "numeric",
	}).format(currentTime);

	// -----
	const fullDate = formatter.split(" ");

	dayOfTheWeek.textContent = `${fullDate[2]}`; //?

	setInterval(getCurrentTime, 1000);
});

function getDomElement(quantity: domQuantity, domItem: string) {
	if (quantity === "one") {
		return document.querySelector(domItem) as HTMLElement;
	} else if (quantity === "multiple") {
		return document.querySelectorAll(domItem) as NodeListOf<HTMLElement>;
	} else {
		throw new Error(
			"You did not tell the getDomElement function what quantity you want"
		);
	}
}
function getCurrentTime() {
	const currentTime = new Date().getTime(); //?
	const time = getDomElement("one", ".time") as HTMLParagraphElement;

	time.textContent = `${currentTime}`;
}
