const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const clearBtn = document.getElementById("clearBtn");
const emptyMessage = document.getElementById("emptyMessage");
let totalTodos = 0;
let completedTodos = 0;
function updateEmptyMessage() {
    emptyMessage.style.display = totalTodos === 0 ? "block" : "none";
}
addBtn.addEventListener("click", () => {
    const todoText = todoInput.value.trim();
    if (todoText === "") {
        alert("Please enter a todo!");
        return;
    }
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = todoText;
    const btnDiv = document.createElement("div");
    btnDiv.className = "todo-buttons";
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    btnDiv.appendChild(completeBtn);
    btnDiv.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(btnDiv);
    todoList.appendChild(li);
    totalTodos++;
    totalCount.textContent = totalTodos;
    updateEmptyMessage();
    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
        if (li.classList.contains("completed")) {
            completedTodos++;
        } else {
            completedTodos--;
        }
        completedCount.textContent = completedTodos;
    });
    deleteBtn.addEventListener("click", () => {
        if (li.classList.contains("completed")) {
            completedTodos--;
            completedCount.textContent = completedTodos;
        }
        li.remove();
        totalTodos--;
        totalCount.textContent = totalTodos;
        updateEmptyMessage();
    });

    todoInput.value = "";
});

clearBtn.addEventListener("click", () => {
    todoList.innerHTML = "";
    totalTodos = 0;
    completedTodos = 0;
    totalCount.textContent = 0;
    completedCount.textContent = 0;
    updateEmptyMessage();
});
