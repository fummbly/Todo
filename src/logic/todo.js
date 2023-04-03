

class Todo {
    constructor(title) {
        this.title = title
        this.tasks = []
    }
    
    getTitle() {
        return this.title;
    }

    setTitle(value) {
        this.title = value
    }

    addTask(task) {
        this.tasks.push(task)
    }

    getTasks() {
        return this.tasks
    }
    setTasks(tasks) {
        this.tasks = tasks
    }
}


export default Todo