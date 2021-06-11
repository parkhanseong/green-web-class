'use strict';

/* ------------------------------------ header ------------------------------------------------------*/
var header = document.querySelector('header');
var aboutSection = document.querySelector('#about');
var aboutSectionHeight = aboutSection.getBoundingClientRect().height;
var goToTop = document.getElementById('goToTop');

document.addEventListener('scroll', function(){
    // header
    if(window.scrollY > 80){
        header.setAttribute("style", "background: #7496B9; box-shadow: 0 5px 5px rgba(0,0,0,.2);");
    }else{
        header.removeAttribute("style");
    }
    // go to top button
    if(window.scrollY > aboutSectionHeight){
        goToTop.classList.add('visible');
    }else{
        goToTop.classList.remove('visible');
    }

})

/* ------------------------------------ gnb ------------------------------------------------------*/
var toggle = document.querySelector('.toggle');
var gnb = document.querySelector('.gnb');
toggle.addEventListener('click', function(){
    this.classList.toggle('active');
    gnb.classList.toggle('active');
    
});

var gnbItem = document.querySelectorAll('.gnb__item a');
gnbItem.forEach(function(item){
    item.addEventListener('click', function(e){
        // a link 기본 이동 막기
        e.preventDefault();
        gnb.classList.remove('active');
        toggle.classList.remove('active');
        var target = e.target.dataset.link;
        var element = document.querySelector(target);
        element.scrollIntoView({behavior: "smooth"});
    })
})

goToTop.addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
})



