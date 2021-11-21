import {list} from ".";
import { activeProject,clearActiveProjects,saveProjects } from "./logic";
import {createProject,createTask} from "./projects";
import {renderProjects,renderHeader,renderTasks} from "./render";



const newProject = (() => {
    const addProjectContainer = document.getElementById('add-project-container');
    const addProjectBtn = document.getElementById('add-project-button');
    const addProjectModal = document.getElementById('add-project-modal');
    const addProjectSubmitButton = document.getElementById('add-project-submit-button');
    const addProjectCancelButton = document.getElementById('add-project-cancel-button');
    const addProjectTitleInput = document.getElementById('project-name-input');
    const addProjectDescriptionInput = document.getElementById('project-description-input');

    function show(){
        addProjectModal.classList.remove('hide');
        addProjectContainer.classList.add('hide');

    }

    function hide(){
        addProjectModal.classList.add('hide');
        addProjectContainer.classList.remove('hide');
        clear();
    }
    
    function clear(){
        addProjectTitleInput.value = "";
        addProjectDescriptionInput.value = "";
    }
    
    function addProject(){
        if(addProjectTitleInput.value != ""){
            let projectTitle = addProjectTitleInput.value;
            let projectDescription = addProjectDescriptionInput.value;
            clearActiveProjects();
            list.push(createProject(projectTitle,projectDescription));
           saveProjects();
            hide();
            renderProjects();
            renderTasks();
            
        }
    }
    return{ addProjectBtn,addProjectSubmitButton,addProjectCancelButton,show,hide,addProject };
})();

const editHeading = (() => {
    const projectInfoContainer = document.getElementById('project-info-container');
    const editProjectInfoContainer = document.getElementById('edit-project-info-container');
    const editProjectInfoIcon = document.getElementById('edit-project-info-icon');
    const editProjectButton = document.getElementById('edit-project-button');
    const editProjectSubmitButton = document.getElementById('edit-project-submit-button');
    const editProjectCancelButton = document.getElementById('edit-project-cancel-button');
    const editProjectNameInput = document.getElementById('edit-project-name-input');
    const editProjectDescriptionInput = document.getElementById('edit-project-description-input');
        
    function show(){
        projectInfoContainer.classList.add('hide');
        editProjectInfoContainer.classList.remove('hide');
    }

    function hide(){
        projectInfoContainer.classList.remove('hide');
        editProjectInfoContainer.classList.add('hide');
    }
    
    function submit(){
        hide();
        activeProject().name = editProjectNameInput.value
        activeProject().description = editProjectDescriptionInput.value
        renderProjects();
        renderHeader()
        saveProjects()
    }
    
    return {show, hide, submit, editProjectInfoIcon, editProjectButton, editProjectSubmitButton, editProjectCancelButton}

})();

const newTask = (() => {
    const addTaskContainer = document.getElementById('add-task-container');
    const addTaskButton = document.getElementById('add-task-button'); 
    const addTaskModal = document.getElementById('add-task-modal');
    const addTaskSubmitButton = document.getElementById('add-task-submit-button');
    const addTaskCancelButton = document.getElementById('add-task-cancel-button');
    const addTaskNameInput = document.getElementById('add-task-name-input');
    const addTaskDateInput = document.getElementById('add-task-date-input');
    
    function show(){
        addTaskContainer.classList.add('hide');
        addTaskModal.classList.remove('hide');
    }
    function hide(){
        addTaskContainer.classList.remove('hide');
        addTaskModal.classList.add('hide');
        clear();
    }
    
    function clear(){
        addTaskNameInput.value = "";
        addTaskDateInput.value = "";
    }
    
    function submit(){
        if(addTaskNameInput.value == "" || addTaskDateInput.value == ""){
           alert('fill all inputs')
        }
        else{
            activeProject().tasks.push(createTask(addTaskNameInput.value,addTaskDateInput.value));
            hide();
            
            renderTasks();
            saveProjects();
        }
    }
    
    return{show,hide,submit,addTaskButton,addTaskSubmitButton,addTaskCancelButton}

})();


const editTask = (() => {
    function show(index){
        const leftTask = document.querySelectorAll(".left-task");
        const rightTask = document.querySelectorAll(".right-task");
        const leftTaskEdit = document.querySelectorAll(".left-task-edit");
        const rightTaskEdit = document.querySelectorAll(".right-task-edit");
        const taskNameInput = document.querySelectorAll(".task-name-input");
        const taskDateInput = document.querySelectorAll(".task-date-input");

        leftTask[index].classList.add('hide')
        rightTask[index].classList.add('hide')
        leftTaskEdit[index].classList.remove('hide')
        rightTaskEdit[index].classList.remove('hide')
        taskNameInput[index].value = activeProject().tasks[index].name;
        taskDateInput[index].value = activeProject().tasks[index].date;
    }
    
    function hide(index){
        const leftTask = document.querySelectorAll(".left-task");
        const rightTask = document.querySelectorAll(".right-task");
        const leftTaskEdit = document.querySelectorAll(".left-task-edit");
        const rightTaskEdit = document.querySelectorAll(".right-task-edit");

        leftTask[index].classList.remove('hide')
        rightTask[index].classList.remove('hide')
        leftTaskEdit[index].classList.add('hide')
        rightTaskEdit[index].classList.add('hide')
    }

    function submit(index){
        const taskNameInput = document.querySelectorAll(".task-name-input");
        const taskDateInput = document.querySelectorAll(".task-date-input");

        if(taskNameInput[index].value == "" || taskDateInput[index].value == ""){
            alert('Please fill all inputs')
        }
        else{
            activeProject().tasks[index].name = taskNameInput[index].value;
            activeProject().tasks[index].date = taskDateInput[index].value;
           saveProjects()
            renderTasks()
            
        }
    }
    return{show,hide,submit}
})();
    




export {newProject, editHeading, newTask, editTask}
