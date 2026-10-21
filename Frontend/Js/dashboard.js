const user = JSON.parse(localStorage.getItem("user"));
document.querySelector('#user-name').innerHTML = `
${user.name}
`;

let todoList =[];

async function displayTodos(){
  document.querySelector('.list-display').innerHTML +=``;
  try{
    const response = await fetch(`todos/get/${user.id}`);
    const data = await response.json();
    if(!response.ok){
      throw new Error('Unable to get your todo list');
    }
    todoList = data.todoList;
  }
  catch(err){
    console.error(err);
  }

  if(todoList.length > 0){
    for(let i = 0; i< todoList.length; i++){
      document.querySelector('.list-display').innerHTML +=`
      <div class= 'item-container'>
      <span>${todoList[i]}</span>
      <button>delete</button> 
      </div>
      `;
    }
  }
  const clearAllbtn = document.querySelector('.clear-all-btn-container')
  clearAllbtn.classList.add('active-clear-all-btn-container');
  clearAllbtn.addEventListener('click', async() => {
    try{
      const response = await fetch(`todos/delete/all/${user.id}`,{
        method: 'DELETE'
      });

      if(!response.ok){
        throw new Error('Failed to delete all todos');
      }
    }
    catch(err){
      console.log(err);
    }
    displayTodos();
  });
}

displayTodos();

document.querySelector('#add-btn').addEventListener('click', async() => {
  const response = await fetch('/todos/post/');
});

document.querySelector('#logout-btn').addEventListener('click', () => {
  localStorage.clear();
  window.location.href = '/';
});