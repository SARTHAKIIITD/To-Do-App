const displayUserName = document.querySelector('#user-name');
const userName = localStorage.getItem('id');
displayUserName.innerText = userName;

const todoList = JSON.parse(localStorage.getItem('todo')) || [];

const displayTodoList = document.querySelector('.list-display');

for(let i = 0; i < todoList.length; i++){
  displayTodoList.innerHTML += `
  <span>${todoList[i]}<span>
  `;
}

function retriveData(){
  const todoList = JSON.parse(localStorage.getItem('todo')) || [];
  const displayTodoList = document.querySelector('.list-display');

  for(let i = 0; i < todoList.length; i++){
    displayTodoList.innerHTML += `
    <span>${todoList[i]}<span><br>
    `;
  }
}
document.querySelector('#add-btn').addEventListener("click", async() => {
  const newItem = document.querySelector('#task-input').value;

  try{
    const response = await fetch(`http://localhost:3000/todo/newItem/${userName}`, {
      method : 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body : JSON.stringify({todo : newItem})
    });

    const data = await response.json();
    console.log(data);
  }catch(error){
    console.error(error);
  }
  document.querySelector('#task-input').value = ``;

  const response2 = await fetch(`/login/${userName}`, {
    });
      if(!response2.ok){
        throw new Error("Unable to retrive user data");
      }
      const data2 = await response2.json();
      console.log(data2.message);
      localStorage.setItem("todo", JSON.stringify(data2.message));
      // localStorage.setItem("id", JSON.stringify(data.message));
      retriveData();
});