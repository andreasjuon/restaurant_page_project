export default function loadMenu() {
    console.log("Loading menu")

    // Select and clear content
    const content = document.querySelector("#content");
    content.replaceChildren();

    // make right triangle nontransparent and change button to active
    const triangles = document.querySelectorAll(".gap img");
    triangles.forEach(img => {
        img.style.opacity = "0"; // 30% opacity
    });
    triangles[1].style.opacity = "1";

    const buttons = document.querySelectorAll("nav button");
    buttons.forEach(img => {
        buttons.forEach(btn => btn.dataset.active = "false");
    });
    buttons[1].dataset.active = "true";

    // Add title
    const title = document.createElement("h1");
    title.textContent = "Was gits z'ässä?*";
    content.appendChild(title);
}