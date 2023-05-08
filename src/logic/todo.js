

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

    getTask(taskTitle) {
       return this.tasks.find((task) => task.getTitle() === taskTitle)

    }

    getTasks() {
        return this.tasks
    }
    setTasks(tasks) {
        this.tasks = tasks
    }

    deleteTasks() {
        this.tasks.forEach((task) => {
            if(task.done) {
                this.tasks.splice(this.tasks.indexOf(task), 1)
            }
        })
    }
}


export default Todo