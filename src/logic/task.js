class Task {
    constructor(title, desc = '', duedate = '') {
        this.title = title;
        this.desc = desc;
        this.duedate = duedate
        this.done = false;
    }

    getTitle() {
        return this.title;
    }

    setTitle(value) {
        this.title = value
    }

    getDesc() {
        return this.desc;
    }

    setDesc(value) {
        this.desc = value
    }

    getDueDate() {
        return this.duedate
    }

    setDueDate(value) {
        this.duedate = value
    }

    changeDone() {
        this.done = !this.done
    }
}

export default Task