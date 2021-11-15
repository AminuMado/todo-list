import todoList from ".";
import trashIcon from "../src/assets/img/delete.svg" ;
import penIcon from "../src/assets/img/edit.svg";

const render = (() =>{
    const projectContainer = document.querySelector('.project-container');
    const projectInfoContainer = document.querySelector('#project-info-container');
    const clearProject = () => {
        projectContainer.textContent = "";
    }
    const clearProjectInfo = () => {
        projectInfoContainer.textContent = "";
    }
    const displayProject = () => {
        clearProject();
        for(let i = 0; i <= todoList.length-1; i++){
            const projectItem = document.createElement("div");
            projectItem.classList.add("project-item");
            projectItem.setAttribute("data-Id", i);
            projectItem.textContent = todoList[i].getTitle();
            const deleteIcon = document.createElement("img");
            deleteIcon.src = trashIcon;
           
            projectContainer.appendChild(projectItem);
            projectItem.appendChild(deleteIcon);
    
        }
    }
    const displayProjectInfo = (index) => {
        clearProjectInfo();
        const projectInfo = document.createElement("div");
        projectInfo.classList.add("project-info");
        projectInfo.setAttribute("id","project-info")
   
        const projectName = document.createElement("h2");
        projectName.setAttribute("id","project-name");
        projectName.textContent = todoList[index].getTitle();
        const projectDescription = document.createElement("h4");
        projectDescription.setAttribute("id","project-description");
        projectDescription.textContent = todoList[index].getDescription();
        const editContainer = document.createElement("div");
        editContainer.setAttribute("id","edit-project-info-icon")
        editContainer.classList.add("edit-project-info-icon")
        const editIcon = document.createElement("img");
        editIcon.setAttribute("id","project-edit-icon")
        editIcon.src = penIcon;
       
        projectInfoContainer.appendChild(projectInfo);
        projectInfoContainer.appendChild(editContainer);
        projectInfo.appendChild(projectName);
        projectInfo.appendChild(projectDescription);
        editContainer.appendChild(editIcon);


    }
       
        
    return{displayProject,displayProjectInfo}
})()

export default render