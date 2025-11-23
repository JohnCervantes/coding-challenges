// -------------------------------
// Patient Registration Script
// -------------------------------

// Grab form elements
const form = document.getElementById("patient-form");

const nameInput = document.getElementById("patient-name");
const ageInput = document.getElementById("patient-age");
const symptomsInput = document.getElementById("patient-symptoms");

const nameError = document.getElementById("name-error");
const ageError = document.getElementById("age-error");
const symptomsError = document.getElementById("symptoms-error");

const patientList = document.getElementById("patients");

// -------------------------------
// Helper Functions
// -------------------------------

function clearErrors() {
  // TODO: Clear all error message elements
  nameError.textContent = "";
  ageError.textContent = "";
  symptomsError.textContent = "";
}

function validateForm(name, age, symptoms) {
  let isValid = true; // Use this variable to track validity
  // TODO: Clear errors first using the above function
  clearErrors();
  // TODO: Validate name (cannot be empty)
  if (name.trim() === "") {
    nameError.textContent = "Name field cannot be empty";
    isValid = false;
  }
  // TODO: Validate age (must be between 1–120)
  if (age < 1 && age > 120) {
    ageError.textContent = "Age must be between 1–120";
    isValid = false;
  }
  // TODO: Validate symptoms (cannot be empty)
  if (symptoms.trim() === "") {
    symptomsError.textContent = "Symptoms field cannot be empty";
    isValid = false;
  }
  // TODO: Return isValid
  return isValid;
}

function addPatientToList(name, age, symptoms) {
  // TODO: Create a list item and append to the patient list
  const listItem = document.createElement("li");
  listItem.textContent = `Name: ${name}, Age: ${age}, Symptoms: ${symptoms}`;
  patientList.appendChild(listItem);
}

// -------------------------------
// Main Form Handler - This handles form submission
// -------------------------------

form.addEventListener("submit", function (event) {
  event.preventDefault(); // This prevents the default form submission and lets us handle it with JavaScript
  console.log("Form submitted");
  const nameValue = nameInput.value;
  const ageValue = parseInt(ageInput.value);
  const symptomsValue = symptomsInput.value;

  // TODO: Call validateForm
  const isValid = validateForm(nameValue, ageValue, symptomsValue);
  // TODO: If the form is not valid, stop the function
  if (!isValid){
    return;
  }
  // TODO: If valid, add patient to the list
  // TODO: Clear input fields after successful submission
  if (isValid) {
    addPatientToList(nameValue, ageValue, symptomsValue);
    form.reset();
  }
});
