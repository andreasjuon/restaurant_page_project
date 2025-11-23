import "./styles.css"; 

// import scripts for all the tabs
import loadPage from "./loadPage.js"; 
import loadMenu from "./loadmenu.js"; 
import loadcontact from "./loadcontact.js"; 

// initial page load
loadPage();

// event listeners to switch between tabs
const button = document.querySelector("button");
document.addEventListener("click", (event) => {
    const id = event.target.id;

    if (id == "home") {
        loadPage();
    }
    if (id == "menu") {
        loadMenu();
    }
    if(id == "contact") {
        loadcontact();
    }
})

console.log("Uga!!!")