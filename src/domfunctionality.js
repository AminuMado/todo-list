import todoList from ".";
import createProject from "./projects";
import render from "./render";

const newProject = (() => {
    const addProjectBtn = document.getElementById('add-project-container');
    const addProjectContainer = document.getElementById('add-project-container');
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
        addProjectTitleInput.value="";
        addProjectDescriptionInput.value="";
    }

    function addProject(){
        if(addProjectTitleInput.value != ""){
            let projectTitle = addProjectTitleInput.value;
            let projectDescription = addProjectDescriptionInput.value;
            todoList.push(createProject(projectTitle,projectDescription))
            hide();
            render.displayProject()
        }
    }

    return{ addProjectBtn,addProjectSubmitButton,addProjectCancelButton,show,hide,addProject };
})();


export default newProject