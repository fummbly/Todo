const content = document.getElementById('content')
import './style.css'

import Task from "./logic/task";
import Todo from "./logic/todo";
import Project from './logic/project';
import UI from "./ui";

const ui = new UI()
const testProject = new Project("Test Project")

ui.renderProject(testProject)

