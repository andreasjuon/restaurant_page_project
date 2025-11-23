export default function loadContact() {
    console.log("Loading contact")

    // Select and clear content
    const content = document.querySelector("#content");
    content.replaceChildren();

    // make right triangle nontransparent and change button to active
    const triangles = document.querySelectorAll(".gap img");
    triangles.forEach(img => {
        img.style.opacity = "0"; // 30% opacity
    });
    triangles[2].style.opacity = "1";

    const buttons = document.querySelectorAll("nav button");
    buttons.forEach(img => {
        buttons.forEach(btn => btn.dataset.active = "false");
    });
    buttons[2].dataset.active = "true";

    // Add title
    const title = document.createElement("h1");
    title.textContent = "Hallo? Hallo? Hallo!";
    content.appendChild(title);
}