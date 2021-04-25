'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// element 투명처리
document.addEventListener('scroll', () => {
    // navbar
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// home section 투명하게 만들기
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height; /* 724px */
const homeContainer = document.querySelector('.home__container');
document.addEventListener('scroll', (event) => {
    const opcaity = 1 - window.scrollY/724;
    homeContainer.style.opacity = opcaity;
})

// navbar 눌렀을때 스크롤 이동시키기
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if ( link == null ) {
        return;
    }
    scrollIntoView(link);
})

// contact Me 버튼 누르면 contact로 이동
const homeConatct = document.querySelector(".home__contact");
homeConatct.addEventListener('click', () => {
    scrollIntoView("#contact");
})


const topBtn = document.querySelector('.top-btn');
document.addEventListener('scroll', () => {
    if( window.scrollY > homeHeight / 2 ) {
        topBtn.classList.add('visible');
    }else {
        topBtn.classList.remove('visible');
    }
})


topBtn.addEventListener('click', () => {
    scrollIntoView('#home');
})

// intoView function
function scrollIntoView (selector) {
    const scrollTo = document.querySelector(selector)
    scrollTo.scrollIntoView({behavior: "smooth"});
}   

// category filter
const workCateContainer = document.querySelector(".work__categories");
const projectContainer  = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workCateContainer.addEventListener(('click'), (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null ){
        return;
    }
    projects.forEach((project) => {
        if(filter === "all" || filter === project.dataset.type) {
            project.classList.remove('invisible');
        }else{
            project.classList.add('invisible');
        }
    });
})




