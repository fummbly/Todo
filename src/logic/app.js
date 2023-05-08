class App {
    constructor() {
        this.projects = []
    }

    addProject(newProject) {
        if(this.projects.find((project) => project.getTitle() === newProject.getTitle())) {
            return
        }
        this.projects.push(newProject)
    }

    getProject(projectName) {
        return this.projects.find((project) => project.getTitle() === projectName)
    }

    getProjects() {
        return this.projects
    }

    setProjects(projects) {
        this.projects = projects
    }

    deleteProject(projectName) {
        const projectToDelete = this.getProject(projectName)

        this.projects.splice(this.projects.indexOf(projectToDelete), 1)
    }

    deleteTodo(projectName, todoName) {
        const project = this.getProject(projectName)

        project.deleteTodo(todoName)
    }

    deleteTasks(projectName, todoName) {
        const todo = this.getProject(projectName).getTodo(todoName)

        todo.deleteTasks()
    }


}

export default App