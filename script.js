// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);
    todoList.addEventListener('click', handleTodoClick);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="todo-text">${todoText}</span>
                <button class="update-btn">Update</button>
                <button class="delete-btn">Delete</button>
            `;
            todoList.appendChild(li);
            todoInput.value = '';
        }
    }

    function handleTodoClick(event) {
        if (event.target.classList.contains('delete-btn')) {
            const li = event.target.parentElement;
            todoList.removeChild(li);
        } else if (event.target.classList.contains('update-btn')) {
            const li = event.target.parentElement;
            updateTodoText(li);
        }
    }

    function updateTodoText(li) {
        const todoTextElement = li.querySelector('.todo-text');
        const newTodoText = prompt('Edit your todo:', todoTextElement.textContent);
        if (newTodoText) {
            todoTextElement.textContent = newTodoText;
        }
    }
});
