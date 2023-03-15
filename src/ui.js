import Task from "./logic/task"
import Todo from "./logic/todo"

class UI {
    constructor() {
        this.content = document.getElementById('content')
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
        const projectDiv = document.createElement('div')
        projectDiv.classList.add('project')
        const projectTitle = document.createElement('h1')
        projectTitle.classList.add('projectTitle')
        projectTitle.textContent = project.title
        projectDiv.appendChild(projectTitle)
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


}

export default UI