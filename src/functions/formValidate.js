const scanDomForm = () => {
    const form = document.querySelector("form");
    const email = document.querySelector("#email");
    const emailError = document.querySelector("#email + span.error");
    return {form, email, emailError}
}

function showError(inputElement) {
  if (inputElement.validity.valueMissing) {
    // If empty
    inputElement.nextElementSibling.textContent =
      inputElement.nextElementSibling.dataset.errorempty;
  } else if (inputElement.validity.typeMismatch) {
    // If it's not an email address,
    inputElement.nextElementSibling.textContent =
      inputElement.nextElementSibling.dataset.errortype;
  } else if (inputElement.validity.tooShort) {
    // If the value is too short,
    inputElement.nextElementSibling.textContent =
      inputElement.nextElementSibling.dataset.errorshort +
      `${inputElement.minLength} characters; you entered ${inputElement.value.length}.`;
  }
  // Add the `active` class
  inputElement.nextElementSibling.className = "error active";
}

export { scanDomForm, showError };