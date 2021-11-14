import todoList from ".";
import trashIcon from "../src/assets/img/delete.svg"

const render = (() =>{
    const projectContainer = document.querySelector('.project-container');
    const displayProject = () => {
        projectContainer.textContent="";
        for(let i = 0; i <= todoList.length-1; i++){
            const projectItem = document.createElement("div");
            projectItem.classList.add("project-item");
            projectItem.setAttribute("data-Id", i);
            const projectTitle = document.createElement("p");
            projectTitle.textContent = todoList[i].getTitle();
            const deleteIcon = document.createElement("img");
            deleteIcon.src = trashIcon;
           
            projectContainer.appendChild(projectItem);
            projectItem.appendChild(projectTitle);
            projectItem.appendChild(deleteIcon);
    
        }
    }
    return{displayProject}
})()

export default render