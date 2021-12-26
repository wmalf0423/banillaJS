const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const savedUsername = localStorage.getItem(USERNAME_KEY);

function handleButtonLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}
function paintGreeting(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}
loginForm.addEventListener("submit", handleButtonLoginSubmit);
if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleButtonLoginSubmit);
}else{
  paintGreeting(savedUsername);
}