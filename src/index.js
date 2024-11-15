import "./styles.css";
import {generateContent} from "./home"
import { generateMenu } from "./menu";
import { generateAbout } from "./about";


generateContent();

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");
const content = document.querySelector("#content");

menuButton.addEventListener('click', () =>{
    content.textContent = '';
    generateMenu();
})

homeButton.addEventListener('click', () =>{
    content.textContent = '';
    generateContent();
})

aboutButton.addEventListener('click', () => {
    content.textContent = '';
    generateAbout();
})
