const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("Please enter a task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Create delete button (×)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Unicode × symbol
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// Toggle line-through or delete
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");  // Toggle line-through
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();       // Delete task
    saveData();
  }
}, false);

// Save to local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Load data when page reloads
function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();
