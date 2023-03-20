class Task {
    constructor(title, desc = '', duedate = '') {
        this.title = title;
        this.desc = desc;
        this.duedate = duedate
        this.done = false;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value
    }

    get desc() {
        return this._desc;
    }

    set desc(value) {
        this._desc = value
    }

    get duedate() {
        return this._duedate
    }

    set duedate(value) {
        this._duedate = value
    }

    changeDone() {
        this.done = !this.done
    }
}

export default Task