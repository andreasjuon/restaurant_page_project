import { scanDomForm, showError } from "./functions/formValidate.js";

export default async function loadNewsletter() {
  console.log("Loading newsletter");

  // Select and clear content
  const content = document.querySelector("#content");
  content.replaceChildren();

  // make right triangle nontransparent and change button to active
  const triangles = document.querySelectorAll(".gap img");
  triangles.forEach((img) => {
    img.style.opacity = "0"; // 30% opacity
  });
  triangles[3].style.opacity = "1";

  const buttons = document.querySelectorAll("nav button");
  buttons.forEach((img) => {
    buttons.forEach((btn) => (btn.dataset.active = "false"));
  });
  buttons[3].dataset.active = "true";

  // Add title
  const title = document.createElement("h1");
  title.textContent = "Sign up";
  content.appendChild(title);

  // Description
  const desc = document.createElement("p");
  desc.textContent = "Hello. Grüezi. Sign up to get regular recommendations on Swiss dishes."
  content.appendChild(desc);

  // Add form
  const response = await fetch("/form/form.html");
  const html = await response.text();
  content.insertAdjacentHTML("beforeend", html);

  // DOM
  const { form, email, emailError } = scanDomForm();
  console.log(form)
    console.log(form);
    console.log(email);
    console.log(emailError);


  // Input event listeners
  email.addEventListener("input", (event) => {
    if (email.validity.valid) {
      emailError.textContent = ""; // Remove the message content
      emailError.className = "error"; // Removes the `active` class
    } else {
      // If there is still an error, show the correct error
      showError(event.target);
    }
  });

  form.addEventListener("submit", (event) => {
    // if the email field is invalid
    if (!email.validity.valid) {
      // display an appropriate error message
      showError(event.target);
      // prevent form submission
      event.preventDefault();
    }
  });


}

