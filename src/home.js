function generateContent(){
const content = document.querySelector("#content");
const contentHeader = document.createElement("div");
contentHeader.classList.add("content-header");
content.appendChild(contentHeader);

const header = document.createElement("div");
header.textContent = "Welcome to Solar Punk Cafe!";
contentHeader.appendChild(header);

const poetryOne = document.createElement("div");
poetryOne.classList.add("header-subtext");
poetryOne.textContent = "A Chrysler";
contentHeader.appendChild(poetryOne);
const poetryTwo = document.createElement("div");
poetryTwo.classList.add("header-subtext");
poetryTwo.textContent = "with four bullet holes";
contentHeader.appendChild(poetryTwo);
const poetryThree = document.createElement("div");
poetryThree.classList.add("header-subtext");
poetryThree.textContent = "in the rear passenger door";
contentHeader.appendChild(poetryThree);

const poetryFour = document.createElement("div");
poetryFour.classList.add("header-subtext");
poetryFour.textContent = "just drove by calmly, signaling";
contentHeader.appendChild(poetryFour);

const poetryFive = document.createElement("div");
poetryFive.classList.add("header-subtext");
poetryFive.textContent = "before it turned.";
contentHeader.appendChild(poetryFive);

const spacer = document.createElement("div");
spacer.classList.add("header-subtext");
contentHeader.appendChild(spacer);

const serving = document.createElement("div");
serving.classList.add("header-subtext");
serving.textContent = "Serving Americans since 2034.";
contentHeader.appendChild(serving);
}

export {generateContent};