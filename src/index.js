import './style.css';

const render = (() =>{
    const homePage = () => {
        const body = document.querySelector('body');
        const header = document.createElement('header');
        const aside = document.createElement('aside');
        const main = document.createElement('main');
        const footer = document.createElement('footer');
        header.setAttribute('id','header');
        footer.setAttribute('id','footer');
        aside.setAttribute('id','aside');
        main.setAttribute('id','main');
        body.appendChild(header);
        body.appendChild(aside);
        body.appendChild(main);
        body.appendChild(footer);


    }
    return {homePage}
})()
render.homePage()