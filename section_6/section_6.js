const keyCodeCkeck = () => {
  let todoInput = document.querySelector("#todo-input");
  if (window.event.keyCode === 13 && todoInput !== "") {
    const todoList = document.querySelector("#todo-list");
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");

    newSpan.textContent = todoInput.value;
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    todoInput.value = "";
  }
};
