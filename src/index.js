// document.addEventListener('DOMContentLoaded', () => {
//
//   const listDiv = document.getElementById("app-content");
//
//   const app = new TaskLister();
// });

let createNewListBtn = document.getElementById('create-list-form')
let newListTitle = document.getElementById('new-list-title')
let lists = document.getElementById('lists')
let selectList = document.getElementById("parent-list")
let createNewTask = document.getElementById('create-task-form')
let taskDescription = document.getElementById("new-task-description")
let newTaskPriority = document.getElementById("new-task-priority")
let deleteListButtons = document.getElementsByClassName("delete-list")
let createNewTaskForm = document.getElementById("create-task-form")

createNewListBtn.addEventListener("submit", function (e) {
  e.preventDefault()
  let newList = document.createElement("div")
  newList.innerHTML = `<h2>${newListTitle.value}<button data-title="${newListTitle.value}" class="delete-list">X</button></h2><ul></ul>`
  lists.appendChild(newList)
  selectList.innerHTML += `<option value="${newListTitle.value}" selected>${newListTitle.value}</option>`
  newListTitle.value = ""
  createNewTaskForm.style.display = "block"
})

createNewTask.addEventListener("submit", function (e){
  e.preventDefault()
  let listName = selectList.value
  let divs = document.querySelectorAll("#lists div")
  let selectedList = [...divs].filter(div => div.innerText.split("X")[0] === listName)[0]
  let newTask = document.createElement("li")
  newTask.innerHTML = `Task: ${taskDescription.value}
  <button data-list-title="${taskDescription.value}" data-task-name="${taskDescription.value}" class="delete-task">X</button><br>Priority: ${newTaskPriority.value}`
  selectedList.appendChild(newTask)
  taskDescription.value = ""
  newTaskPriority.value = ""
})

lists.addEventListener("click", (e) => {
  if (e.target.className === "delete-list") {
    let listItem = e.target.parentElement.innerText.slice(0, -1)
    Array.from(selectList).forEach(element => {
      if (element.innerText === listItem) {
        element.remove()
      }
    })
    e.target.parentElement.parentElement.remove()
  } else if (e.target.className === "delete-task") {
    e.target.parentElement.remove()
  }
  if (selectList.length === 0) {
    createNewTaskForm.style.display = "none"
  }
})
