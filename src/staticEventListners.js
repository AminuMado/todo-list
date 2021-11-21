import { newProject, editHeading, newTask} from "./domfunctionality";


const btn = document.querySelector('.menu-btn');
const aside = document.querySelector('#aside');
const overlay = document.querySelector('#overlay');
let menuOpen = false;


btn.addEventListener('click',toggle)

newProject.addProjectBtn.addEventListener('click', newProject.show);
newProject.addProjectSubmitButton.addEventListener('click', newProject.addProject);
newProject.addProjectCancelButton.addEventListener('click', newProject.hide);

editHeading.editProjectInfoIcon.addEventListener('click', editHeading.show);
editHeading.editProjectSubmitButton.addEventListener('click', editHeading.submit);
editHeading.editProjectCancelButton.addEventListener('click', editHeading.hide);

newTask.addTaskButton.addEventListener('click', newTask.show);
newTask.addTaskCancelButton.addEventListener('click', newTask.hide);
newTask.addTaskSubmitButton.addEventListener('click', newTask.submit);

function toggle() {
    !menuOpen ? open() : close();

    function open() {
        btn.classList.add('open');
        aside.classList.add('show');
        overlay.classList.add('show');
        menuOpen = true;
    }

    function close() {
        btn.classList.remove('open');
        aside.classList.remove('show');
        overlay.classList.remove('show');
        menuOpen = false;
    }
}
