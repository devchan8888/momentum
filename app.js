const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = 'hidden'

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem("username", username)
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}
 
function handleLinkClick(event){
    event.preventDefault()
    alert("clicked")
}

loginForm.addEventListener("submit", onLoginSubmit)
link.addEventListener("click", handleLinkClick)
