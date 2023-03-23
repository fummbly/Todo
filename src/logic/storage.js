import App from "./app";

class Storage {
    constructor(currentApp) {
        if(!localStorage.getItem('app')) {
            this.populateStorage(currentApp)
        }
        else {

        }
    }

    populateStorage(app) {
        const projects = app.projects
        console.log(projects[0].title)
    }
}


export default Storage