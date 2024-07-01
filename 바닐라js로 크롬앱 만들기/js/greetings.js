const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

// localStorage에 저장된 유저이름이 있는지 없는지에 따라 사용자에게 보여줄 화면이 다름
// 유저 이름이 없다면 form의 hidden 을 없애고, 이벤트 리스너를 추가해줌
// 유저 이름이 있다면 저장된 유저 이름을 가져와 화면에 인사를 보여줌

if(localStorage.getItem(USERNAME_KEY) === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
}else{
    showUserName();
}

// localStorage에 저장된 유저이름과 함께 사용자에게 h1을 보여줌

function showUserName(){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${localStorage.getItem(USERNAME_KEY)}`;
}

// form의 제출 버튼이 눌렸을 때, 입력값을 localStorage에 저장해줌
function onLoginSubmit(event){
    event.preventDefault();
    localStorage.setItem('username', loginInput.value);
}

