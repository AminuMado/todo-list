import createProject from "./projects";
import todoList from ".";
import render from "./render";

const events = (() => {
    const aside = document.getElementById('aside');
    const addProject = document.getElementById('add-project');
    const addProjectContainer = document.getElementById('add-project-container');
    const addProjectModal = document.getElementById('add-project-modal');
    const addProjectSubmitButton = document.getElementById('add-project-submit-button');
    const addProjectCancelButton = document.getElementById('add-project-cancel-button');
    const addProjectTitle = document.getElementById('project-name-input');
    const addProjectDescription = document.getElementById('project-description-input');
    aside.addEventListener('click',(e) =>{
        console.log(e.target)
        
        if(e.target.id == 'add-project-cancel-button'){
            addProjectContainer.classList.remove('hide');
            addProjectModal.classList.add('hide');
        } else if(e.target.id == 'add-project-submit-button'){
            let projectTitle = addProjectTitle.value;
            let projectDescription = addProjectDescription.value;
            if(projectTitle){
                todoList.push(createProject(projectTitle,projectDescription))
                console.log(todoList)
                console.log(todoList[0].getTitle())
                console.log(todoList[0].getDescription())
                addProjectContainer.classList.remove('hide');
                addProjectModal.classList.add('hide');
                render.displayProject()
                
            }
        } else if(e.target.classList == "project-item"){
            render.displayProjectInfo(e.target.getAttribute("data-id"))
        }
        
    })
  
    addProject.addEventListener('click',()=>{
        addProjectContainer.classList.add('hide');
        addProjectModal.classList.remove('hide');
    })
  
})()
const main = document.getElementById("main");
const projectInfoContainer = document.getElementById("project-info-container");
const editProjectInfoContainer = document.getElementById("edit-project-info-container");

main.addEventListener("click",(e) => {
    if(e.target.id == "project-edit-icon"){
        projectInfoContainer.classList.add("hide");
        editProjectInfoContainer.classList.remove("hide");
    }
    if(e.target.id == 'edit-project-cancel-button'){
        editProjectInfoContainer.classList.add("hide");
        projectInfoContainer.classList.remove("hide");
    }
})


export default events