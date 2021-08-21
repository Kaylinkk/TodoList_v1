const toDoForm = document.getElementById("todo-Form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-List");
 
let toDos = []; // using let, we can update the array when we push the information to the array
const TODOS_KEY = "todos";

function savedToDos(){
// we cannot save array to the local storage, so we need to change from array to string
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
//JSON.stringify(), it is able to change from whatever I got to the string. 
}

function deletingTodo(event){
   const li = event.target.parentElement;
   li.remove();
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
   //meaning, we want to keep the toDos that has not same id we clicked (li.id)
   //parseInt, parse to Int 
   savedToDos();
}

//notice this parameter doens't have to be (newTodobj) but anything else
//but in this section, i used (newTodoObj) because it seems more reasonable and noticable
function writingPlan(newTodoObj){

    const list = document.createElement("li");
    list.id = newTodoObj.id; 
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText ="🧨";
    button.addEventListener("click", deletingTodo)
    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
}


function handleSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
         //Date.now() is the function that give us  miliseconds but it seems like Random
    };
    toDos.push(newTodoObj);
    writingPlan(newTodoObj);
    savedToDos();
}


toDoForm.addEventListener("submit",handleSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);

if (savedToDo !== null){
    const parsedToDos = JSON.parse(savedToDo);
    toDos = parsedToDos;
    //JSON.parse, it can make make strong to the javascript object that javascript understand
    parsedToDos.forEach(writingPlan);
    //forEach(element =>){}, it can execute the function for each item on the array 
    //(element) is parameter, and this all call as arrow function. 
    //but here, we already have function made already, so we can just use that function
}


//filter, not deleting items, but exloude the item that we don't want. 
//and make a new array with new info
