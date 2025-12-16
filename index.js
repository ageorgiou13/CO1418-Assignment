


/*
In index JS we select the main header element that wraps logo and navigation
we select the hamburger button that will toggle the menu on width<768 screens and when the
hamburger button is clicked I added an event listener that adds or remove nav-open class on the header
and in the css .homepage-menu.nav-open.nav-panel is used to show or hide the navigation.
 */

const header = document.querySelector(".homepage-menu");
const toggle = document.querySelector(".hamburger-menu");

toggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
});