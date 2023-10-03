// Control dom elements
const body = document.getElementsByTagName("body");
const para = document.getElementById("para");
const quoteBtn = document.getElementById("quote-btn");

// Get random quote listener

const lastNameInput = document.querySelector(".input__lastName");
const idInput = document.querySelector(".input__ID");
const searchBtn = document.querySelector(".searchBtn");
const firstName = document.querySelector(".first__name");
const lastName = document.querySelector(".last__name");
const id = document.querySelector(".id");
const email = document.querySelector(".email");
const catchphrase = document.querySelector(".catchphrase");

searchBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(
      `http://localhost:3000/users?last_name=${lastNameInput.value}`
    );
    const users = await response.json();
    const user = users.data[0];
    firstName.innerText = `First name: ${user.first_name}`;
    lastName.innerText = `Last name: ${user.last_name}`;
    id.innerText = `ID: ${user.id}`;
    email.innerText = `Email: ${user.email}`;
    catchphrase.innerText = `Catchphrase: ${user.catchphrase}`;
  } catch (error) {
    console.error("Error fetching quotes:", error);
    para.innerText = "Error fetching quotes";
  }
});

// Add quote listener

const addFirstName = document.querySelector(".add__firstName");
const addLastName = document.querySelector(".add__lastName");
const addEmail = document.querySelector(".add__email");
const addCatchphrase = document.querySelector(".add__catchphrase");
const addEmployeeBtn = document.querySelector(".addBtn");

addEmployeeBtn.addEventListener("click", async () => {
  const firstNameText = addFirstName.value;
  const lastNameText = addLastName.value;
  const emailText = addEmail.value;
  const catchphraseText = addCatchphrase.value;

  if (firstNameText.trim() === "") {
    alert("Please enter a first name."); // Show an alert for empty input
    return;
  }
  if (lastNameText.trim() === "") {
    alert("Please enter an last name."); // Show an alert for empty input
    return;
  }
  if (emailText.trim() === "") {
    alert("Please enter an email."); // Show an alert for empty input
    return;
  }
  if (catchphraseText.trim() === "") {
    alert("Please enter an catchphrase."); // Show an alert for empty input
    return;
  }
  // POST request instructing that the content will be json format, then the body is turned into a json object using stringify.
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: firstNameText,
      last_name: lastNameText,
      email: emailText,
      catchphrase: catchphraseText,
    }),
  });

  if (response.ok) {
    alert("Employee added successfully!"); // Show a success message
    newQuoteInput.value = ""; // Clear the input field
  } else {
    alert("Failed to add employee. Please try again."); // Show an error message
  }
});
