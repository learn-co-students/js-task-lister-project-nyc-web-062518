// document.addEventListener('DOMContentLoaded', () => {
//   // your solution here
//   // grab DOM elements
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

createNewListBtn.addEventListener("submit", function (e) {
  e.preventDefault()
  let newList = document.createElement("div")
  newList.innerHTML = `<h2>${newListTitle.value}<button data-title="${newListTitle.value}" class="delete-list">X</button></h2><ul></ul>`
  lists.appendChild(newList)
    selectList.innerHTML += `<option value="${newListTitle.value}" selected>${newListTitle.value}</option>`
  newListTitle.value = ""
})

createNewTask.addEventListener("submit", function (e){
  e.preventDefault()
  let listName = selectList.value
  let divs = document.querySelectorAll("#lists div")
  // debugger
  let selectedList = [...divs].filter(div => div.innerText.split("X")[0] === listName)[0]
  let newTask = document.createElement("li")
  newTask.innerHTML = `Task: ${taskDescription.value}
  <button data-list-title="${taskDescription.value}" data-task-name="${taskDescription.value}" class="delete-task">X</button><br>Priority: ${newTaskPriority.value}`
  // debugger
  selectedList.appendChild(newTask)
  taskDescription.value = ""
  newTaskPriority.value = ""
})
