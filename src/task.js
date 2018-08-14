let taskID = 0
let allTasks = []

class Task {
  constructor(title, priority){
    this.title = title
    this.priority = priority
    this.id = ++taskID
    allTasks.push(this)
  }
}
