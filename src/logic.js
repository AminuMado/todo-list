import { list } from ".";

function activeProject() {
    let activeProjectArray = list.filter(project => project.active);
    return activeProjectArray[0];
}
function clearActiveProjects() {
    list.forEach(project => project.active = false);
}
 
function switchActiveProject(index) {
    if (!index)return;
    clearActiveProjects();
    list[index].active = true;

}
function deleteProject(index) {
    if (!index) return;
    if (list.length > 1) {
        if (list[index] == activeProject()) {
            if (index != 0) {
                list[index - 1].active = true;
                list.splice(index, 1);
            }
            else {
                list[1].active = true;
                list.splice(0, 1);
            }
        }
        else {
            list.splice(index, 1);
        }
    }
    else return;
}
function taskCompleted(index){
    if(!index) return
    activeProject().tasks[index].completed = true;
}
 
function taskIncompleted(index){
    if(!index) return
    activeProject().tasks[index].completed = false;
}
 
function deleteTask(index){
    if(!index) return
    activeProject().tasks.splice(index,1);
}
 
function saveProjects() {
    window.localStorage.setItem('project', JSON.stringify(list))
}

export {activeProject,clearActiveProjects,switchActiveProject,deleteProject,taskCompleted,taskIncompleted,deleteTask,saveProjects};
