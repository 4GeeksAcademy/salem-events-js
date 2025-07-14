const form = document.querySelector(".needs-validation");
const errorAlert = document.getElementById("errorAlert");
const submitButton = document.getElementById("submitButton");
// Hide the error alert initially
errorAlert.classList.add("d-none");
submitButton.addEventListener("click", (event) => {
  if (!form.checkValidity()) {
    console.log("Form is invalid, showing error alert");
    event.preventDefault();
    event.stopPropagation();
    errorAlert.classList.remove("d-none");
  } else {
    console.log("Form is valid, submitting");
    errorAlert.classList.add("d-none");
  }
  form.classList.add("was-validated");
});
