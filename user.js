const userForm = document.querySelector(".user");
const userInput = userForm.querySelector("input");
const h2 = document.querySelector("h2");
const div = document.querySelector(".h2div");
const form = document.querySelector(".formdiv");

function setNameLocalStorage(event) {
  event.preventDefault();
  const userName = userInput.value;
  localStorage.setItem("name", userName);
  showName(userName);
}

function showName(userName) {
  form.classList.add("no-display");
  userForm.classList.add("no-display");
  h2.classList.remove("no-display");
  div.classList.remove("no-display");
  h2.innerText = `Welcome ${userName}`;
}

function askName() {
  div.classList.add("no-display")
  userForm.classList.remove("no-display");
  form.classList.remove("no-display");
  userForm.addEventListener("submit", setNameLocalStorage);
}

function loadName() {
  const userName = localStorage.getItem("name");
  if (userName === null) {
    askName();
  } else {
    showName(userName);
  }
}

function init() {
  loadName();
}

init();