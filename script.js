// PASSWORD
const APP_PASSWORD = "231013";

// CHECK LOGIN
function checkPassword() {
  const input = document.getElementById("password").value;

  if (input === APP_PASSWORD) {
    localStorage.setItem("logged", "yes");
    loadApp();
  } else {
    document.getElementById("error").style.display = "block";
  }
}

// LOAD APP
function loadApp() {
  if (localStorage.getItem("logged") === "yes") {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
  }
}
loadApp();

// HOMEWORK LOGIC
function addTask() {
  const taskInput = document.getElementById("task");
  const task = taskInput.value;

  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <button onclick="this.parentElement.remove()">❌</button>
  `;
  document.getElementById("list").appendChild(li);
  taskInput.value = "";
}