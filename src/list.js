let listID = 0
let allLists = []

class List {
  constructor(title){
    this.title = title
    this.id = ++listID
    allLists.push(this)
  }
}
