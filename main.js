

const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
  const taskName = inputField.value.trim();
  if (taskName !== '') {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
 
    const todoText = document.createElement('div');
    todoText.classList.add('todo-text');
    todoText.innerText = taskName;
 
    const todoActions = document.createElement('div');
    todoActions.classList.add('todo-actions');
 
    const todoCrossButton = document.createElement('button');
    todoCrossButton.innerHTML = '&#10005;';
    todoCrossButton.addEventListener('click', function() {
      toDoContainer.removeChild(todoItem);
    });
 
    const todoCheckButton = document.createElement('button');
    todoCheckButton.innerHTML = '&#10003;';
    todoCheckButton.addEventListener('click', function() {
      todoItem.classList.toggle('completed');
    });
 
    todoActions.appendChild(todoCheckButton);
    todoActions.appendChild(todoCrossButton);
 
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoActions);
 
    toDoContainer.appendChild(todoItem);
    inputField.value = '';
  }
});