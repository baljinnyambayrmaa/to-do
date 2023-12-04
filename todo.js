const addCard = document.getElementsByClassName("add_card");
const taskContainer = document.getElementsByClassName("task_container")[0];

Array.prototype.forEach.call(addCard, (el) => {
  el.addEventListener("click", function () {
    taskContainer.style.display = "flex";
  });
});

window.addEventListener("click", (event) => {
  if (event.target == taskContainer) {
    taskContainer.style.display = "none";
  }
});

const states = [];

const objOfTask = {
  Title: "",
  Description: "",
  Status: "todo",
  Priority: "low",
};

const title = document.getElementById("titleInput");
const description = document.getElementById("textarea");
const selectionStatus = document.getElementById("selectId");
const selectionPrior = document.getElementById("selectP");
const addTask = document.getElementsByClassName("add_button")[0];

description.addEventListener("change", (event) => {
  objOfTask.Description = event.target.value;
});

title.addEventListener("change", (event) => {
  objOfTask.Title = event.target.value;
});

selectionStatus.addEventListener("change", (event) => {
  objOfTask.Status = event.target.value;
});

selectionPrior.addEventListener("change", (event) => {
  objOfTask.Priority = event.target.value;
});

addTask.addEventListener("click", () => {
  states.push({ ...objOfTask });
  clear();
});

const clear = () => {
  title.value = "";
  description.value = "";
  selectionStatus.value = "todo";
  selectionPrior.value = "High";

  objOfTask.Title = "";
  objOfTask.Description = "";
  objOfTask.Status = "todo";
  objOfTask.Priority = "low";

  taskContainer.style.display = "none";
};

const card = () => {
  return `<div class="card">
            <div class="icon">
                <i class="fa-solid fa-check"></i>
            </div>
            <div class="text">
                <h3>Todo</h3>
                <p>This is todo card</p>
                <button>high</button>
            </div>
            <div class="icon">
                <i class="fa-solid fa-x"></i>
                <i class="fa-regular fa-pen-to-square"></i>
            </div>
        </div>`;
};
