class Project {
    constructor(title) {
        this.title = title;
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
}

export default Project