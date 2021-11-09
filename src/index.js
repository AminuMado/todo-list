import './style.css';


const menuBtn = document.querySelector('.menu-btn');
console.log(menuBtn)
let menuOpen = false;
menuBtn.addEventListener('click',() =>{
   !menuOpen ? open() : close();
})
function open(){
    menuBtn.classList.add('open');
    menuOpen = true;
}
function close(){
    menuBtn.classList.remove('open');
    menuOpen = false;
}
// const render = (() =>{
//     const homePage = () => {
//         const body = document.querySelector('body');
//         const header = document.createElement('header');
//         const aside = document.createElement('aside');
//         const main = document.createElement('main');
//         const footer = document.createElement('footer');
//         const headerTitle = document.createElement('h1');
//         const asideTitle = document.createElement('h2');
//         const text1 = document.createTextNode('My Todo');
//         const text2 = document.createTextNode('Projects');
//         header.setAttribute('id','header');
//         footer.setAttribute('id','footer');
//         aside.setAttribute('id','aside');
//         main.setAttribute('id','main');
//         //Appends
//         body.appendChild(header);
//         body.appendChild(aside);
//         body.appendChild(main);
//         body.appendChild(footer);
//         header.appendChild(headerTitle);
//         aside.appendChild(asideTitle);
//         headerTitle.appendChild(text1);
//         asideTitle.appendChild(text2);
        
        
//     }
//     return {homePage}
// })()
// render.homePage()