const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  const typedUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, typedUsername);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(typedUsername);
}

function paintGreeting(name) {
  greeting.innerText = `Hello ${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}

const clock = document.querySelector('#clock');
const calendar = document.querySelector('#calendar');

const time = new Date();

function getTime() {
  const month = String(time.getMonth()).padStart(2, '0');
  const date = String(time.getDate()).padStart(2, '0');

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  calendar.innerText = `${month}월 ${date}일`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
