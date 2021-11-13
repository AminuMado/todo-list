
const createProject  = (title,description) => {
    let _title = title;
    let _description = description;
    let _tasks = [];
    const getTitle = () => _title;
    const setTitle = (title) => _title = title;
    const getTask = () => _tasks;
    const addTask = (task) => _tasks.push(task);
    const getDescription = () => _description;
    const setDescription = (description) => _description = description;
    const deleteTask = (index) => _tasks.splice(index,1);
    return {getTitle,getDescription,setTitle,setDescription,getTask,addTask,deleteTask}
};

const createTask = (name,date) => {
    return {name,date}
}



export default createProject;

// Test
// const methods = {
    //     getTitle() {
        //         return this._title
        //     },
        //     setTitle(title) {
            //         return this._title = title
            //     },
            //     getTask() {
                //         return this._tasks
                //     },
                //     addTask(task) {
                    //         return this._tasks.push(task)
                    //     },
//     getDescription() {
//         return this._description
//     },
//     setDescription(description) {
//         return this._description = description
//     },
//     deleteTask(index) {
//         return this._tasks.splice(index,1)
//     },
// };
// const createProject  = (title,description) => {
//     let project = Object.create(methods)
//     project._title = title;
//     project._description = description;
//     project._tasks = [];
//     return project
// };
// // 
// const createTask = (name,date) => {
//     return {name,date}
// }
// const task1 = createTask('new task1','today');
// const task2 = createTask('new task2','today');
// const task3 = createTask('new task3','today');
// const task4 = createTask('new task4','today');
// console.log(task1);
// const project1 = createProject('Example Project','This is an example Description');
// const project2 = createProject('Example Project1','This is an example Description');
// console.log(project1)
// console.log(project1.getTitle())
// project1._title = 'changed title'
// console.log(project1.getTitle()) 
// console.log(project1.getTitle())
// console.log(project2.getTitle())
// project1.addTask(task1);
// project1.addTask(task2);
// project1.addTask(task3);
// project1.addTask(task4);
// project2.addTask(task2)
// console.log(project1.getTask())
// console.log(project2.getTask())