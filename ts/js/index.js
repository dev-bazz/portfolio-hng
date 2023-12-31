document.addEventListener("DOMContentLoaded", () => {
    const dayOfTheWeek = getDomElement("one", ".day");
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
function getDomElement(quantity, domItem) {
    if (quantity === "one") {
        return document.querySelector(domItem);
    }
    else if (quantity === "multiple") {
        return document.querySelectorAll(domItem);
    }
    else {
        throw new Error("You did not tell the getDomElement function what quantity you want");
    }
}
function getCurrentTime() {
    const currentTime = new Date().getTime(); //?
    const time = getDomElement("one", ".time");
    time.textContent = `${currentTime}`;
}
export {};
