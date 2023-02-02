// SELECTORS
const form = document.querySelector('#form');
const input = document.querySelector('#item');
const todoList = document.querySelector('.todos');

// FUNCTIONS
// 1. Add todo to the todo list
const addTodo = (todo) => {
  // prevent the form from being submitted
  todo.preventDefault();

  // get the user value from the input field
  const inputValue = input.value;

  if (!inputValue) {
    showAlert('Please fill in the field', 'danger');
  } else {
    // create new todo list
    const newTodo = document.createElement('div');
    newTodo.className = 'todo';
    newTodo.innerHTML = `
      <li>${inputValue}</li>
      <i class="fa-solid fa-xmark delete"></i>
  `;

    // append new Todo the todo List
    todoList.appendChild(newTodo);

    showAlert('Todo added', 'success');
  }

  // clear the input field after adding a new todo
  input.value = '';
};

// Remove todo from the todo list
const deleteTodo = (e) => {
  const todo = e.target;

  if (todo.classList.contains('delete')) {
    todo.parentElement.remove();
    showAlert('Todo removed', 'success');
  }
};

// Show alert
const showAlert = (message, classname) => {
  const div = document.createElement('div');
  div.className = `alert alert-${classname}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.content');
  container.insertBefore(div, form);

  setTimeout(() => document.querySelector('.alert').remove(), 1000);
};

// EVENT LISTENERS
form.addEventListener('submit', addTodo);
todoList.addEventListener('click', deleteTodo);
