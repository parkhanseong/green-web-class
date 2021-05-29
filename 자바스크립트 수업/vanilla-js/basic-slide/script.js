var btnPrev =document.querySelector("#btnPrev");
var btnNext =document.querySelector("#btnNext");
var sliderContainer = document.querySelector('.slider-container');
var slide = document.querySelectorAll('.slider-container li');
var currentIndex = 0;
var slideCount = slide.length;

btnPrev.addEventListener('click', function(){
    sliderContainer.style.left = -100+'%';
})

// 초기 세팅
if(currentIndex == 0) {
    btnPrev.style.display = 'none';
}

function moveSlide(num) {
    sliderContainer.style.left = - num * 100 + '%';
    currentIndex = num;
    
    btnPrev.style.display = 'block';
    btnNext.style.display = 'block';
    if(currentIndex == 0 ){
        btnPrev.style.display = 'none';
        btnNext.style.display = 'block';
    }else if(currentIndex == slideCount - 1 ){
        btnNext.style.display = 'none';
        btnPrev.style.display = 'block';
    }
}
btnPrev.addEventListener('click', function(){
    moveSlide(currentIndex - 1);
})
btnNext.addEventListener('click', function(){
    moveSlide(currentIndex + 1);
})