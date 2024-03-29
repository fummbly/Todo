class Project {
    constructor(title) {
        this.title = title;
        this.color = 200;
        this.todos = []
    }

    getTitle() {
        return this.title
    }

    setTitle(title) {
        this.title = title
    }


    addTodo(newTodo) {
        if(this.todos.find((todo) => todo.getTitle() === newTodo.getTitle())) {
            return
        }

        this.todos.push(newTodo)
    }

    getTodo(todoName) {
        return this.todos.find((todo) => todo.getTitle() === todoName)
    }

    getTodos() {
        return this.todos
    }

    setTodos(todos) {
        this.todos = todos
    }

    deleteTodo(todoName) {
        const todoToDelete = this.todos.find((todo) => todo.getTitle() === todoName)

        this.todos.splice(this.todos.indexOf(todoToDelete), 1)
    }

    getColor() {
        return this.color
    }

    setColor(value) {
        this.color = value
    }
}

export default Project