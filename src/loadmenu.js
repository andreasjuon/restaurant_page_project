
import rösti from "./img/meals/rösti.png";
import capuns from "./img/meals/capuns.png";
import ghackets from "./img/meals/ghackets.png";
const meals = [rösti, capuns, ghackets];
const mealNames = ["Rösti","Capuns","Ghackets mit Hörnli"];


export default function loadMenu() {
  console.log("Loading menu");

  // Select and clear content
  const content = document.querySelector("#content");
  content.replaceChildren();

  // make right triangle nontransparent and change button to active
  const triangles = document.querySelectorAll(".gap img");
  triangles.forEach((img) => {
    img.style.opacity = "0"; // 30% opacity
  });
  triangles[1].style.opacity = "1";

  const buttons = document.querySelectorAll("nav button");
  buttons.forEach((img) => {
    buttons.forEach((btn) => (btn.dataset.active = "false"));
  });
  buttons[1].dataset.active = "true";

  // Add title
  const title = document.createElement("h1");
  title.textContent = "Was gits z'ässä?";
  content.appendChild(title);

  // Add image carousel
  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  const dotDiv = document.createElement("div");

  // Add images
  meals.forEach((meal, number) => {
    // create parent div for image
    const mealSlide = document.createElement("div");
    mealSlide.classList.add("mealSlide");

    // image itself
    const image = document.createElement("img");
    image.classList.add("meal");
    image.src = meal;

    // description of meal
    const mealDescription = document.createElement("div");
    mealDescription.classList.add("mealDescription");
    mealDescription.textContent = mealNames[number];

    // append these to image parent div
    mealSlide.append(image);
    mealSlide.append(mealDescription);

    // and append this to the carousel
    carousel.appendChild(mealSlide);

    // for each image also append dot and corresponding functionality
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.addEventListener("click", () => currentSlide(number + 1));
    dotDiv.appendChild(dot);
  });

  // Buttons
  const buttonPrev = document.createElement("a");
  buttonPrev.classList.add("prev");
  buttonPrev.addEventListener("click", () => plusSlides(-1));
  buttonPrev.innerHTML = "&#10094;";

  const buttonNext = document.createElement("a");
  buttonNext.classList.add("next");
  buttonNext.addEventListener("click", () => plusSlides(1));
  buttonNext.innerHTML = "&#10095;";

  carousel.appendChild(buttonPrev);
  carousel.appendChild(buttonNext);

  content.appendChild(carousel);
  content.appendChild(dotDiv);

  // Setup sliding functionality
  let slides = document.getElementsByClassName("mealSlide");
  let dots = document.getElementsByClassName("dot");
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    console.log(slideIndex);
  }

  // Description
  const para = document.createElement("p");
  para.textContent =
    "Thanks for checking out our delicious Swiss meals. You can find out more by clicking on our great items.";
  content.appendChild(para);
}

