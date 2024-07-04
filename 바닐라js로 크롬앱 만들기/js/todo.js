const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// 입력한 투두리스트를 저장할 배열
const TODOS_KEY = "todos";

const savedToDos = localStorage.getItem(TODOS_KEY);
let toDos = savedToDos ? JSON.parse(savedToDos) : [];

// 투두리스트를 저장할 함수
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}



function deleteToDo(){
    const li = event.target.parentElement;
    li.remove();

    toDos = toDos.filter((todo) => todo.today !== parseInt(li.id));
    saveToDos();
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo.text;
    button.innerText = '❎';
    button.addEventListener("click", deleteToDo);
    li.id = newTodo.today;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObject = {
        today: Date.now(),
        text: newToDo
    };

    paintToDo(newToDoObject);
    toDos.push(newToDoObject);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(todo => {
        paintToDo(todo)
    })
}