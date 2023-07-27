
document.querySelector('#push').addEventListener("click", function () {

  if (document.querySelector('#newtask input').value.length == 0) {
    alert("Por favor insira um Item!");
  } else {
    addTaskHandler();
    document.querySelector("#newtask input").value = "";
    document.querySelector("#newtask input").focus();
  }
})

function addTaskHandler() {
  document.querySelector("#tasks-list").innerHTML += `
    <div class="task">
    <div class="line">
    <div class="custom-checkbox"></div>
    <span class="taskname">${
      document.querySelector("#newtask input").value
    }</span>
    </div>
    <button class="delete">
    <i class="fa fa-trash" aria-hidden="true"></i>
    </button>
    </div>`;

document.querySelectorAll(".delete")
    .forEach(task => task.addEventListener("click", function () {
             this.parentNode.remove();
  }));

document.querySelectorAll(".custom-checkbox").forEach(task =>
  task.addEventListener("click", function () {
    this.parentNode.classList.toggle("task-completed");
  }));
}
