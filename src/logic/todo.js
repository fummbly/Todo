

class Todo {
    constructor(title) {
        this.title = title
        this.tasks = []
    }
    
    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value
    }

    addTask(task) {
        this.tasks.push(task)
    }
}


export default Todo