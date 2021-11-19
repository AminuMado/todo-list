

const createProject  = (projectName,projectDescription) => {
    let name = projectName;
    let description = projectDescription;
    let tasks = [];
    let active = true;
    return {name, description, tasks, active}
};


const createTask = (name,date) => {
    return {name: name, date: date, completed: false}
}

export {createProject,createTask}
