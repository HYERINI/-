const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    localStorage.setItem('userName', loginInput.value);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${localStorage.getItem('userName')}`;
}

loginForm.addEventListener('submit', onLoginSubmit);
