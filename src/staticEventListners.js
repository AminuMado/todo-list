const events = (() => {
    const addProject = document.getElementById('add-project');
    const addProjectContainer = document.getElementById('add-project-container');
    const addProjectModal = document.getElementById('add-project-modal');
    const addProjectSubmitButton = document.getElementById('add-project-submit-button');
    const addProjectCancelButton = document.getElementById('add-project-cancel-button');

    addProject.addEventListener('click',()=>{
        addProjectContainer.classList.add('hide');
        addProjectModal.classList.remove('hide');
    })
    addProjectCancelButton.addEventListener('click',()=>{
        addProjectContainer.classList.remove('hide');
        addProjectModal.classList.add('hide');
    })
    addProjectSubmitButton.addEventListener('click',()=>{
        addProjectContainer.classList.remove('hide');
        addProjectModal.classList.add('hide');
    })
})()



export default events