const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list")

const TODO_KEY = 'todos'

let todos = []


function saveTodos() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos))
}

function handleTodoSubmit(event) {
    event.preventDefault()
    const newTodo = todoInput.value
    todoInput.value = ""

    const newTodoObj = {
        id : Date.now(),
        text : newTodo,
    }
    todos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveTodos()
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li")
    li.id = newTodoObj.id

    const span = document.createElement("span")
    span.innerText = newTodoObj.text
    
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener('click', deleteTodo)

    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)
}

function deleteTodo(event) {
    const parent = event.target.parentElement
    parent.remove()
    todos = todos.filter((todo=> todo.id !== parseInt(parent.id)))
    saveTodos()
}

todoForm.addEventListener('submit', handleTodoSubmit)



const savedTodos = localStorage.getItem(TODO_KEY)

if (savedTodos !== null ){
    const parsedTodos = JSON.parse(savedTodos) 
    todos = parsedTodos
    parsedTodos.forEach(paintTodo)
}