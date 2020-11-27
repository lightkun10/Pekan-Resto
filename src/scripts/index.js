import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";

console.log('Hello Coders! :)');

const hamburgerBtn = document.querySelector("#hamburger");
const drawer = document.querySelector("#drawer");

hamburgerBtn.addEventListener("click", e => {
    drawer.classList.toggle("open");
    e.stopPropagation();
});