import Task from "./logic/task"
import Todo from "./logic/todo"
import Project from "./logic/project"

class UI {
    constructor(app) {
        this.content = document.getElementById('content')
        this.sidebar = document.getElementById('sidebar')
        this.menu = document.getElementById('menu')
        this.menu.addEventListener('click', () => {
            this.sidebar.classList.add('show')
        })
        this.app = app
    }

    renderTodo(todo) {
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        const todoTitle = document.createElement('h2')
        todoTitle.textContent  = todo.title;
        todoDiv.appendChild(todoTitle)
        const taskHolderDiv = document.createElement('div')
        this.renderTasks(todo.tasks, taskHolderDiv)
        todoDiv.appendChild(taskHolderDiv)
        const addTaskBtn = document.createElement('button')
        addTaskBtn.innerHTML = "Add Task"
        addTaskBtn.classList.add('addTask')
        addTaskBtn.addEventListener('click', () => {
            this.addTaskPop(todo, taskHolderDiv)
        })

        console.log(todo.tasks)

        todoDiv.appendChild(addTaskBtn)

        return todoDiv
    }

    renderTodos(todos, parent) {
        parent.textContent = ''
        for(let todo of todos) {
            parent.appendChild(this.renderTodo(todo))
        }
    }

    renderTask(task) {
        const taskDiv = document.createElement('div')
        taskDiv.classList.add('task')
        const taskTitle = document.createElement('p')
        taskTitle.textContent = task.title
        taskDiv.appendChild(taskTitle)
        taskDiv.addEventListener('click', () => {
            task.changeDone()
            taskDiv.classList.toggle("done")
        })

        if(task.done) {
            taskDiv.classList.add('done')
        }

        if(task.desc !== "") {
            const taskDesc = document.createElement('p')
            taskDesc.textContent = task.desc
            taskDiv.appendChild(taskDesc)
        }

        if(task.duedate !== "") {
            const splitDate = task.duedate.split('-')
            const taskDate = document.createElement('p')
            taskDate.classList.add('taskDate')
            taskDate.textContent = `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`
            taskDiv.appendChild(taskDate)
        } else {
            
        }

        return taskDiv
    }

    renderTasks(tasks, parent) {
        parent.textContent = ""
        for(let task of tasks) {
            parent.appendChild(this.renderTask(task))
        }
    }

    renderProject(project) {
        this.content.innerHTML = ""
        const projectDiv = document.createElement('div')
        projectDiv.classList.add('project')
        const projectTitleDiv = document.createElement('div')
        projectTitleDiv.classList.add('projectTitle')
        const projectTitle = document.createElement('h1')
        projectTitle.textContent = project.title
        projectTitleDiv.appendChild(projectTitle)
        const threedot = document.createElement('img')
        threedot.classList.add('dots')
        threedot.src = "../images/dots.png"
        threedot.addEventListener('click', () => {
            this.projectEditPop(project)
        })
        projectTitleDiv.appendChild(threedot)
        projectDiv.appendChild(projectTitleDiv)
        const projectContent = document.createElement('div')
        projectContent.classList.add('projectContent')
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todoDiv')
        this.renderTodos(project.todos, todoDiv)
        projectContent.appendChild(todoDiv)
        const addTodoBtn = document.createElement('button')
        addTodoBtn.classList.add('addTodo')
        addTodoBtn.innerHTML = 'Add Todo'
        addTodoBtn.addEventListener('click', () => {
            this.addTodoPop(project, todoDiv)
        })
        projectContent.addEventListener('wheel', (e) => {
            e.preventDefault()
            projectContent.scrollLeft += e.deltaY
        })
        projectContent.appendChild(addTodoBtn)
        projectDiv.appendChild(projectContent)
        this.content.appendChild(projectDiv)

    }

    renderSidebarProjects(parent) {
        parent.textContent = ""
        for(let project of this.app.projects) {
            const projectTitle = document.createElement('p')
            projectTitle.textContent = project.title
            projectTitle.addEventListener('click', () => {
                this.content.innerHTML = ''
                this.renderProject(project)
            })
            parent.appendChild(projectTitle)
        }
        return parent
    }

    renderSidebar() {
        this.sidebar.innerHTML = ''
        const titleDiv = document.createElement("div")
        titleDiv.classList.add('buttonContainer')
        const sidebarTitle = document.createElement('h1')
        sidebarTitle.textContent = 'Your Projects'
        titleDiv.appendChild(sidebarTitle)
        const closeBtn = document.createElement('img')
        closeBtn.src = "../images/close.png"
        closeBtn.classList.add('icon')
        closeBtn.addEventListener('click', () => {
            this.sidebar.classList.remove('show')
        })
        titleDiv.appendChild(closeBtn)
        this.sidebar.appendChild(titleDiv)
        const projectDiv = document.createElement('div')
        projectDiv.id = 'projectDiv'
        this.sidebar.appendChild(this.renderSidebarProjects(projectDiv))

        const addProject = document.createElement('button')
        addProject.innerHTML = "Add Project"
        addProject.addEventListener('click', () => {
            this.addProjPop(this.app)
        })

        this.sidebar.appendChild(addProject)

        
    }

    addProjPop() {
        const popup = document.createElement('form')
        popup.classList.add('popup')
        popup.id = 'addProjectPopup'
        const popupTitle = document.createElement('h2')
        popupTitle.textContent = 'Add Project'
        popup.appendChild(popupTitle)
        const projTitleInput = document.createElement('input')
        projTitleInput.type = 'text'
        popup.appendChild(projTitleInput)
        const submitBtn = document.createElement('button')
        submitBtn.type = 'submit'
        submitBtn.innerHTML = 'Submit'
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if(projTitleInput.value !== "") {
                const newProj = new Project(projTitleInput.value)
                this.app.addProject(newProj)
                this.renderSidebar(this.app)
                this.renderProject(newProj)

            }

            popup.remove()
        })

        popup.appendChild(submitBtn)

        this.content.appendChild(popup)
    }

    addTaskPop(todo, taskDiv) {
        const popup = document.createElement('form')
        popup.classList.add('popup')
        popup.id = "addTaskPopup"
        const popupTitle = document.createElement('h2')
        popupTitle.textContent = "Add Task"
        popup.appendChild(popupTitle)
        const titleLabel = document.createElement('label')
        titleLabel.htmlFor = "titleInput"
        titleLabel.textContent = "Title"
        popup.appendChild(titleLabel)
        const titleInput = document.createElement('input')
        titleInput.type = "text"
        titleInput.required = "true"
        popup.appendChild(titleInput)
        const descLabel = document.createElement('label')
        descLabel.htmlFor = 'descInput'
        descLabel.textContent = "Description"
        popup.appendChild(descLabel)
        const descInput = document.createElement('input')
        descInput.type = 'text'
        popup.appendChild(descInput)
        const dateLabel = document.createElement('label')
        dateLabel.htmlFor = 'dateInput'
        dateLabel.textContent = 'Due Date'
        popup.appendChild(dateLabel)
        const dateInput = document.createElement('input')
        dateInput.type = 'date'
        popup.appendChild(dateInput)

        const buttonDiv = document.createElement('div')
        buttonDiv.classList.add('btnDiv')
        const addBtn = document.createElement('button')
        addBtn.type = 'submit'
        addBtn.innerHTML = 'Add Task'
        addBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if(titleInput.value !== "") {
                todo.addTask(new Task(titleInput.value, descInput.value, dateInput.value))
                this.renderTasks(todo.tasks, taskDiv)

            }
            popup.remove()
        })
        buttonDiv.appendChild(addBtn)
        const canBtn = document.createElement('button')
        canBtn.innerHTML = 'Cancel'
        canBtn.addEventListener('click', () => {
            popup.remove()
        })
        buttonDiv.appendChild(canBtn)
        popup.appendChild(buttonDiv)



        this.content.appendChild(popup)

    }

    addTodoPop(project, todoDiv) {
        const popup = document.createElement('form')
        popup.classList.add('popup')
        popup.id = 'addTodoPop'

        const popupTitle = document.createElement('h2')
        popupTitle.textContent = 'Add Todo'
        popup.appendChild(popupTitle)

        const titleLabel = document.createElement('label')
        titleLabel.textContent = 'Title'
        titleLabel.htmlFor = 'titleInput'
        popup.appendChild(titleLabel)

        const titleInput = document.createElement('input')
        titleInput.type = 'text'
        titleInput.id = 'todoTitleinput'
        titleInput.required = "true"
        popup.appendChild(titleInput)

        const buttonDiv = document.createElement('div')
        buttonDiv.classList.add('btnDiv')
        const addBtn = document.createElement('button')
        addBtn.innerHTML = 'Add Todo'
        addBtn.type = 'submit'
        addBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if(titleInput.value !== "")
            {
                project.addTodo(new Todo(titleInput.value))
                this.renderTodos(project.todos, todoDiv)
                
            }
            popup.remove()
        })
        buttonDiv.appendChild(addBtn)
        const canBtn = document.createElement('button')
        canBtn.innerHTML = 'Cancel'
        canBtn.addEventListener('click', () =>  {
            popup.remove()
        })

        buttonDiv.appendChild(canBtn)
        popup.appendChild(buttonDiv)

        this.content.appendChild(popup)

    }   

    projectEditPop(project) {
        const popup = document.createElement('div')
        popup.id = 'prodjEdit'
        const rename = document.createElement("h2")
        rename.textContent = "Rename Project"
        rename.addEventListener('click', () => {
            this.renameProject(project)
            popup.remove()
        })
        popup.appendChild(rename)
        const deleteProject = document.createElement('h2')
        deleteProject.textContent = "Delete Project"
        deleteProject.addEventListener('click', () => {
            popup.remove()
        })
        popup.appendChild(deleteProject)

        const canBtn = document.createElement('h2')
        canBtn.textContent = "Cancel"
        canBtn.addEventListener('click', () => {
            popup.remove()
        })

        popup.appendChild(canBtn)


        this.content.appendChild(popup)
    }

    renameProject(project) {
        const popup = document.createElement('form')
        popup.classList.add('popup')
        const title = document.createElement('h2')
        title.textContent = "Rename Project"
        popup.appendChild(title)
        const titleInput = document.createElement('input')
        titleInput.type = 'text'

        popup.appendChild(titleInput)
        const submitBtn = document.createElement('button')
        submitBtn.type = 'submit'
        submitBtn.innerHTML = "Submit"
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if(titleInput.value !== "") {
                this.content.innerHTML = ""
                project.title = titleInput.value
                this.renderProject(project)
                this.renderSidebar()
            }
            popup.remove()
        })

        popup.appendChild(submitBtn)

        this.content.appendChild(popup)
    }


}

export default UI