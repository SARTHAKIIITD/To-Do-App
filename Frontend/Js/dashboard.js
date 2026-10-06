const displayUserName = document.querySelector('#user-name');
const userName = localStorage.getItem('id');
displayUserName.innerText = userName;

const todoList = localStorage.getItem('todo') || [];

const displayTodoList = document.querySelector('.list-display');

for(let i = 0; i < todoList.length; i++){
  displayTodoList.innerHTML += `
  <span>${todoList[i][0]}<span>
  `;
}