import App from "./app";
import Project from "./project";
import Task from "./task";
import Todo from "./todo";

class Storage {
    static saveApp(data) {
        localStorage.setItem('app', JSON.stringify(data))
    }

    static getApp() {
        const app = Object.assign(new App(), JSON.parse(localStorage.getItem('app')))

        app.setProjects(
            app.getProjects().map((project) => Object.assign(new Project(), project))
        )

        app.getProjects().forEach((project) => 
            project.setTodos(project.getTodos().map((todo) => Object.assign(new Todo(), todo))))

        app.getProjects().forEach((project) => 
            project.getTodos().forEach((todo) => 
                todo.setTasks(todo.getTasks().map((task) => Object.assign(new Task, task)))))

        return app;
    }

    static addProject(project) {
        const app = Storage.getApp()
        app.addProject(project)
        Storage.saveApp(app)
    }

    static addTodo(projectName, todo) {
        const app = Storage.getApp()
        app.getProject(projectName).addTodo(todo)
        Storage.saveApp(app)
    }

    static addTask(projectName, todoName, task) {
        const app = Storage.getApp()
        app.getProject(projectName).getTodo(todoName).addTask(task)
        Storage.saveApp(app)
    }

    static renameProject(projectName, newProjectName) {
        const app = Storage.getApp()
        app.getProject(projectName).setTitle(newProjectName)
        Storage.saveApp(app)
    }

    static renameTodo(projectName, todoName, newTodoName) {
        const app = Storage.getApp()
        app.getProject(projectName).getTodo(todoName).setTitle(newTodoName)
        Storage.saveApp(app)
    }

    static renameTask(projectName, todoName, taskName, newTaskName) {
        const app = Storage.getApp()
        app.getProject(projectName).getTodo(todoName).getTask(taskName).setTitle(newTaskName)
        Storage.saveApp(app)
    }


}


export default Storage