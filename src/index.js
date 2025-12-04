import "./styles.css"; 

if (process.env.NODE_ENV !== 'production') {

    console.log('Looks like we are in development mode!');

}

// import scripts for all the tabs
import loadPage from "./loadPage.js"; 
import loadMenu from "./loadmenu.js"; 
import loadcontact from "./loadcontact.js"; 
import loadNewsletter from "./loadnewsletter.js"; 

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
    };
    if (id == "newsletter") {
      loadNewsletter();
    }
})

console.log("Uga!!!")