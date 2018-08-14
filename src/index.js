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

createNewListBtn.addEventListener("click", function (e) {
  e.preventDefault()
  let newList = document.createElement("div")
  newList.innerHTML = `<h2>${newListTitle.value}<button data-title="${newListTitle.value}" class="delete-list">X</button></h2>`
  lists.appendChild(newList)
})
