import swissmenu from "./img/swissmenu.png";

export default function loadPage() {
    console.log("Loading page")

    // Select and clear content
    const content = document.querySelector("#content")
    content.replaceChildren();

    // make right triangle nontransparent and change button to active
    const triangles = document.querySelectorAll(".gap img");
    triangles.forEach(img => {
        img.style.opacity = "0"; // 30% opacity
    });
    triangles[0].style.opacity = "1";

    const buttons = document.querySelectorAll("nav button");
    buttons.forEach(img => {
        buttons.forEach(btn => btn.dataset.active = "false");
    });
    buttons[0].dataset.active = "true";


    // Add title
    const title = document.createElement("h1");
    title.textContent = "Willkommä*";
    content.appendChild(title);

    // Add image
    const image = document.createElement("img")
    image.src = swissmenu;
    content.appendChild(image);

    // Add paragraph
    const par_list = [
        "* Das heisst welcome - I mean, in Swiss German. One of the nicest sounding languages in the world. And a secret: not only the language is nice but our food as well! So willkommä to our Alp! Please try the nice Swiss food from lecker Röschti over hammer Capuns und bis zu Ghackets mit Hörnli! Merci vielmale.",
        "PS.: Another word to know: Grüezi. This means hello. And if visiting our restaurant: Mmmh, fein! This means oh how tasty!"
    ];
    par_list.forEach(text => {
        const p = document.createElement("p");
        p.textContent = text;
        content.appendChild(p);
    });
}
