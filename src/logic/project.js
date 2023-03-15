class Project {
    constructor(title) {
        this.title = title;
        this.todos = []
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }


    addTodo(todo) {
        this.todos.push(todo)
    }
}

export default Project