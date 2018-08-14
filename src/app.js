const listForm = document.getElementById('create-list-form')
const listInput = document.getElementById('new-list-title')
const appContent = document.getElementById('app-content')
//^ might be moved to index.js
/////////////////////////////////////////////////////////////////////

const listDiv = document.createElement('div')
const firstScript = document.querySelector('script')
listDiv.id = "lists"
document.querySelector('#main-content').insertBefore(listDiv, firstScript)

const taskForm = document.createElement('form')
taskForm.id = "create-task-form"
appContent.appendChild(taskForm)

let labelSelect = document.createElement('label')
labelSelect.innerText = 'Select List:'
labelSelect.htmlFor = 'parent-list'
taskForm.appendChild(labelSelect)

let selectList = document.createElement('select')
selectList.id = 'parent-list'
taskForm.appendChild(selectList)

let labelTask = document.createElement('label')
labelTask.innerText = 'Task description:'
labelTask.htmlFor = 'new-task-description'
taskForm.appendChild(labelTask)

let inputTask = document.createElement('input')
inputTask.id = 'new-task-description'
inputTask.required = true
inputTask.type = 'text'
inputTask.placeholder = 'description'
taskForm.appendChild(inputTask)

let labelPriority = document.createElement('label')
labelPriority.innerText = 'Priority level:'
labelPriority.htmlFor = 'new-task-priority'
taskForm.appendChild(labelPriority)

let inputPriority = document.createElement('input')
inputPriority.id = 'new-task-priority'
inputPriority.type = 'text'
inputPriority.placeholder = 'priority'
taskForm.appendChild(inputPriority)

let inputCreate = document.createElement('input')
inputCreate.type = 'submit'
inputCreate.value ='Create New Task'
taskForm.appendChild(inputCreate)

// Change to None when done editing form
taskForm.style.display = "block"

listForm.addEventListener('submit', function(e) {
//todo uniq
  e.preventDefault();
  //task form
  taskForm.style.display = "block"

  //list item card
  let listItemDiv = document.createElement('div')
  let listItemTitle = document.createElement('h2')
  let listItemDelete = document.createElement('button')
  listItemDelete.className = 'delete-list'
  listItemDelete.dataset.title = listInput.value
  let newOption = document.createElement('option')
  newOption.innerText = listInput.value
  newOption.value = listInput.value
  selectList.appendChild(newOption)
  listItemDelete.innerText = 'x'
  let listUl = document.createElement('ul')

  listItemTitle.innerText = listInput.value

  listDiv.appendChild(listItemDiv)
  listItemDiv.appendChild(listItemTitle)
  listItemTitle.appendChild(listItemDelete)
  listItemDiv.appendChild(listUl)

})

taskForm.addEventListener('submit', function(e) {
  e.preventDefault()
  let listHeader = [...document.getElementsByTagName('h2')].find(h => h.innerText === selectList.value + 'x')
  let ul = listHeader.nextSibling
  let taskDesc = inputTask.value
  let taskPriority = inputPriority.value

  let li = document.createElement('li')
  li.innerHTML = "Task: " + taskDesc + "<button data-list-title=" + `${selectList.value} ` + "data-task-name=" + `${taskDesc} ` + "class='delete-task'> x </button> <br> Priority: " + taskPriority
  ul.appendChild(li)
})

listDiv.addEventListener('click', function(e) {
  if (e.target.className === "delete-list") {
    e.target.parentNode.parentNode.remove()
    let title = e.target.parentNode.innerText.slice(0, -1)
    let option = document.querySelector(`option[value="${title}"]`)
    option.remove()
  }
  if (e.target.className === "delete-task") {
    e.target.parentNode.remove()
  }
})
// document.getElementsByClass()
// all buttons with the class
