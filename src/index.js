
import './style.css'

import App from './logic/app'
import Project from './logic/project';
import UI from "./ui";

const app = new App()
const ui = new UI(app)

app.addProject(new Project("Test Project"))

ui.renderSidebar()

