document.querySelector('#logout-btn').addEventListener('click', () => {
  localStorage.clear();
  window.location.href = '/';
});

const user = JSON.parse(localStorage.getItem("user"));
document.querySelector('#user-name').innerHTML = `
${user.name}
`;

async function func1(){
  let todoList =[];
  try{
    const response = await fetch(`/get/${user.id}`);
    const data = await response.json(); 
    todoList = data.todoList;
    console.log(typeof(todoList));
    localStorage.setItem('todoList', JSON.stringify(todoList));
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
}

func1();

