import {list} from ".";
import { activeProject} from "./logic";
import deleteIconSrc from "../src/assets/img/delete.svg" ;
import editIconSrc from "../src/assets/img/edit.svg";
import moment from "moment";
import checkIconSrc from "../src/assets/img/tick.svg";
import { createProjectBtnListeners,createTaskBtnListeners } from './eventListeners';

const projectContainer = document.getElementById('project-container');
const headerProjectName = document.getElementById('project-name');
const headerProjectDescription = document.getElementById('project-description');
const editProjectNameInput = document.getElementById('edit-project-name-input');
const editProjectDescriptionInput = document.getElementById('edit-project-description-input');
const tasksContainer = document.getElementById('tasks-container');


function renderProjects(){
    clearProjects()
    list.forEach((project, index) => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");
        if (project.active) {
            projectItem.classList.add("active");
        }
        projectItem.setAttribute("data-Id", index);
        projectItem.textContent = list[index].name;
        const deleteIcon = document.createElement("img");
        deleteIcon.src = deleteIconSrc;
        deleteIcon.setAttribute("id", "delete-icon");
        projectContainer.appendChild(projectItem);
        projectItem.appendChild(deleteIcon);
    });
    createProjectBtnListeners();
    renderHeader()

};
function clearProjects() {
    projectContainer.textContent = "";
}
function renderHeader(){
    clearHeader();
    headerProjectName.textContent = activeProject().name;
    headerProjectDescription.textContent = activeProject().description;
    editProjectNameInput.value = activeProject().name;
    editProjectDescriptionInput.value = activeProject().description;
}
function clearHeader() {
    headerProjectName.textContent = '';
    headerProjectDescription.textContent = '';
}     
function renderTasks(){
    clearTasks();
    activeProject().tasks.forEach((item,index) => {
        const task = document.createElement("div");
        task.classList.add("task");
        task.dataset.id = index;

        const leftTask = document.createElement("div");
        leftTask.classList.add("left-task");

        const checkbox = document.createElement("div");
        const checkIcon = document.createElement("img");
        checkIcon.src = checkIconSrc
        checkbox.appendChild(checkIcon);
        checkbox.classList.add("checkbox");
        leftTask.appendChild(checkbox);

        const taskName = document.createElement("p");
        taskName.classList.add("task-name");
        taskName.textContent = item.name;
        leftTask.appendChild(taskName);

        task.appendChild(leftTask);

        const leftTaskEdit = document.createElement("div");
        leftTaskEdit.classList.add("left-task-edit","hide");
        
        const taskNameInput = document.createElement("input");
        taskNameInput.classList.add("task-name-input");
        taskNameInput.type = "text";
        taskNameInput.placeholder = "Task Name";

        leftTaskEdit.appendChild(taskNameInput);
        task.appendChild(leftTaskEdit);

        const rightTask = document.createElement("div");
        rightTask.classList.add("right-task");

        const taskTime = document.createElement("div");
        taskTime.classList.add("task-time");
        taskTime.textContent = moment(item.date, "YYYY-MM-DD").fromNow();
        rightTask.appendChild(taskTime);

        const taskEditIcon = document.createElement("img");
        taskEditIcon.classList.add("task-edit-icon");
        taskEditIcon.src = editIconSrc;
        rightTask.appendChild(taskEditIcon);

        const taskDeleteIcon = document.createElement("img");
        taskDeleteIcon.classList.add("task-delete-icon");
        taskDeleteIcon.src = deleteIconSrc;
        rightTask.appendChild(taskDeleteIcon);

        task.appendChild(rightTask);

        const rightTaskEdit = document.createElement("div");
        rightTaskEdit.classList.add("right-task-edit","hide");
        const taskDateInput = document.createElement("input");
        taskDateInput.classList.add("task-date-input");
        taskDateInput.type = "date";
        rightTaskEdit.appendChild(taskDateInput);

        const editTaskButtonContainer = document.createElement("div");
        editTaskButtonContainer.classList.add("edit-task-button-container");

        const editTaskSubmitButton = document.createElement("p");
        editTaskSubmitButton.classList.add("edit-task-submit-button");
        editTaskSubmitButton.textContent = "Submit";
        editTaskButtonContainer.appendChild(editTaskSubmitButton);

        const editTaskCancelButton = document.createElement("p");
        editTaskCancelButton.classList.add("edit-task-cancel-button");
        editTaskCancelButton.textContent = "Cancel";
        editTaskButtonContainer.appendChild(editTaskCancelButton);

        rightTaskEdit.appendChild(editTaskButtonContainer);
        task.appendChild(rightTaskEdit);
        tasksContainer.appendChild(task);
        
        if(item.completed){
            checkbox.classList.add("checked");
            task.classList.add("checked");
            taskEditIcon.classList.add("checked");
            taskDeleteIcon.classList.add("checked");
        } else {
            checkbox.classList.remove("checked");
            task.classList.remove("checked");
            taskEditIcon.classList.remove("checked");
            taskDeleteIcon.classList.remove("checked");
        }
    });
    createTaskBtnListeners()
}
function clearTasks(){
    tasksContainer.textContent = "";
}

export {renderProjects,renderHeader,renderTasks}
