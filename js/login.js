const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const inside = document.querySelector("#insideBox");
const formationBox = document.querySelector(".formBox");
const HIDDEN_CLASS ="hidden"
const USERNAME_KEY ="username"


function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    welcomeSign(username);
}

function welcomeSign(username){
    greeting.innerText = `Hello, ${username}`
    greeting.classList.remove(HIDDEN_CLASS);
    inside.classList.remove(HIDDEN_CLASS);
    formationBox.classList.toggle("formBox");
    
    }


    
    const savedUsername = localStorage.getItem(USERNAME_KEY);

    if (savedUsername === null){
        loginForm.classList.remove(HIDDEN_CLASS);
        inside.classList.add(HIDDEN_CLASS);
    loginForm.addEventListener("submit" ,loginSubmit);
    } else{
        loginForm.classList.add(HIDDEN_CLASS);
        greeting.classList.remove(HIDDEN_CLASS);
        welcomeSign(savedUsername);
       
    }