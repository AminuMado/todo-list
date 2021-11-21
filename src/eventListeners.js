
import { editTask } from "./domfunctionality";
import { renderHeader, renderTasks, renderProjects } from "./render";
import { switchActiveProject,deleteProject,taskCompleted,taskIncompleted,deleteTask,saveProjects } from "./logic";


    function createProjectBtnListeners() {
    let projects = document.querySelectorAll(".project-item");
    projects.forEach(btn => btn.addEventListener('click', function (e) {
        if (e.target.id == "delete-icon") {
            return;
        }
        else {
            switchActiveProject(e.target.getAttribute('data-id'));
            renderProjects();
            renderHeader();
            renderTasks();
        }
    }));
    const deleteIcon = document.querySelectorAll("#delete-icon");
    deleteIcon.forEach(deleteBtn => deleteBtn.addEventListener('click', function (e) {
        console.log(e.target.parentNode);
        deleteProject(e.target.parentNode.getAttribute('data-id'));
        renderProjects();
        renderHeader();
        renderTasks();
        saveProjects();
    }));
}
    function createTaskBtnListeners() {
    let checkbox = document.querySelectorAll(".checkbox");
    checkbox.forEach(btn => btn.addEventListener('click', function (e) {
        if (e.target.closest(".checkbox").classList.contains("checked")) {
            taskIncompleted(e.target.closest(".checkbox").parentNode.parentNode.getAttribute('data-id'));
        }
        else {
            taskCompleted(e.target.closest(".checkbox").parentNode.parentNode.getAttribute('data-id'));

        }
        saveProjects();
        renderTasks();
    }));

    let taskEditIcon = document.querySelectorAll(".task-edit-icon");
    taskEditIcon.forEach(btn => btn.addEventListener('click', function (e) {
        editTask.show(e.target.parentNode.parentNode.getAttribute('data-id'));
    }));

    let taskDeleteIcon = document.querySelectorAll(".task-delete-icon");
    taskDeleteIcon.forEach(btn => btn.addEventListener('click', function (e) {
        deleteTask(e.target.parentNode.parentNode.getAttribute('data-id'));
        saveProjects();
        renderTasks()
    }));

    let editTaskCancelButton = document.querySelectorAll(".edit-task-cancel-button");
    editTaskCancelButton.forEach(btn => btn.addEventListener('click', function (e) {
        editTask.hide(e.target.parentNode.parentNode.parentNode.getAttribute('data-id'));
    }));

    let editTaskSubmitButton = document.querySelectorAll(".edit-task-submit-button");
    editTaskSubmitButton.forEach(btn => btn.addEventListener('click', function (e) {
        editTask.submit(e.target.parentNode.parentNode.parentNode.getAttribute('data-id'));
        renderTasks();
    }));
}

export {createProjectBtnListeners,createTaskBtnListeners}