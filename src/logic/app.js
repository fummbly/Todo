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


}

export default App