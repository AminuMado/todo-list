import createProject from "./projects";
import moment from "moment";
import todo from ".";
import { newProject, editHeading, editTask , newTask} from "./domfunctionality";
import { renderProject, renderHeader, renderTasks } from "./render";

const staticEvents = (() => {
    newProject.addProjectBtn.addEventListener('click', newProject.show);
    newProject.addProjectSubmitButton.addEventListener('click', newProject.addProject);
    newProject.addProjectCancelButton.addEventListener('click', newProject.hide);

    editHeading.editProjectInfoIcon.addEventListener('click', editHeading.show);
    editHeading.editProjectSubmitButton.addEventListener('click', editHeading.submit);
    editHeading.editProjectCancelButton.addEventListener('click', editHeading.hide);
    
    newTask.addTaskButton.addEventListener('click', newTask.show);
    newTask.addTaskCancelButton.addEventListener('click', newTask.hide);
    newTask.addTaskSubmitButton.addEventListener('click', newTask.submit);

})()

const dynamicEvents = (()=>{
    const createProjectBtnListeners = ()=>{
        let projects = document.querySelectorAll(".project-item");
        projects.forEach(btn => btn.addEventListener('click', function(e){
            if(e.target.id == "delete-icon"){
                return
            } 
            else{
             todo.switchActiveProject(e.target.getAttribute('data-id'));

            }
        }))
        const deleteIcon = document.querySelectorAll("#delete-icon");
            deleteIcon.forEach(deleteBtn => deleteBtn.addEventListener('click', function(e){
                console.log(e.target.parentNode)
            todo.deleteProject(e.target.parentNode.getAttribute('data-id'));
            // storeMyProjects();
            }))
    }
    const createTaskBtnListeners = ()=>{
        let checkbox = document.querySelectorAll(".checkbox");
        checkbox.forEach(btn => btn.addEventListener('click', function(e){
            if(e.target.classList.contains("checked")){
                todo.taskIncompleted(e.target.parentNode.parentNode.getAttribute('data-id'));
            }
            else{
               todo.taskCompleted(e.target.parentNode.parentNode.parentNode.getAttribute('data-id'));
            }
            // storeMyProjects();
            renderTasks.display();
        }));

        let taskEditIcon = document.querySelectorAll(".task-edit-icon");
        taskEditIcon.forEach(btn => btn.addEventListener('click', function(e){
            editTask.show(e.target.parentNode.parentNode.getAttribute('data-id'));
        }));
    
        let taskDeleteIcon = document.querySelectorAll(".task-delete-icon");
        taskDeleteIcon.forEach(btn => btn.addEventListener('click', function(e){
            todo.deleteTask(e.target.parentNode.parentNode.getAttribute('data-id'));
            // storeMyProjects();
        }));
    
        let editTaskCancelButton = document.querySelectorAll(".edit-task-cancel-button");
        editTaskCancelButton.forEach(btn => btn.addEventListener('click', function(e){
            console.log(e.target)
            editTask.hide(e.target.parentNode.parentNode.parentNode.getAttribute('data-id'));
        }));
        
        let editTaskSubmitButton = document.querySelectorAll(".edit-task-submit-button");
        editTaskSubmitButton.forEach(btn => btn.addEventListener('click', function(e){
            editTask.submit(e.target.parentNode.parentNode.parentNode.getAttribute('data-id'));
        }));
    }
    
   
    return{createProjectBtnListeners,createTaskBtnListeners}
})()
       
export {dynamicEvents, staticEvents}
