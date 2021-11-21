
import './style.css';
import './staticEventListners'
import {createProject,createTask} from './projects';
import { renderProjects,renderHeader, renderTasks } from "./render";
import { activeProject} from "./logic";


let list = [];
if(localStorage.getItem('project') == null){
    list.push(createProject("Sample Project","This is a sample Description"));
    activeProject().tasks.push(createTask("Default Task","2021-11-21"))
    activeProject().tasks.push(createTask("To edit or delete use the available icons","2021-11-21"))
    renderProjects();
    renderHeader()
    renderTasks();
}
else {
    list = JSON.parse(window.localStorage.getItem('project'));
    renderProjects();
    renderHeader();
    renderTasks();
}
export {list}