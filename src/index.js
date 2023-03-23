
import './style.css'

import Storage from './logic/storage';
import App from './logic/app'
import Project from './logic/project';
import UI from "./ui";

const app = new App()
const ui = new UI(app)
const storage = new Storage(app)

app.addProject(new Project("Test Project"))

ui.renderSidebar()

