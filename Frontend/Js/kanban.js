const kanbanForm = document.querySelector("#kanban-board .task-input-container");
const kanbanInput = document.querySelector("#kanban-board .task-input-container input");

kanbanForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload
  const taskText = kanbanInput.value.trim();
  if (taskText === "") return;
  
  // Add your logic to put this task into the kanban column here
  console.log("Adding task:", taskText);
  
  kanbanInput.value = "";
});