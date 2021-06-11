
    // 각 엘리먼트들
var slideWrapper = $('.slide_wrapper'),
    slides = slideWrapper.find(".slides"),
    slide = slides.find('li'),
    prevBtn = slideWrapper.find('.prev'),
    nextBtn = slideWrapper.find('.next'),

    // 크기값
    slideWidth = 200,
    slideMargin = 30,
    // 움직임 관련 값
    currentIdx = 0,
    slideCount = slide.length,
    moveAmt,

    maxSlides = 3,
    reponsiveMargin = 20,
    newSlides,
    newSlideWidth,
    newSlideWidth = slideWidth;

// 복사본 생성하기 뒤에 5개 추가
slides.prepend(slide.clone().addClass('clone'));
slides.append(slide.clone().addClass('clone'));

// 가로배열하기
function slideLayout(sw, sm) {
    newSlides = $('.slide_wrapper li');
    moveAmt = sw + sm; 
    newSlides.each(function(idx){
        $(this).css({left: moveAmt*idx + 'px', width: sw + 'px'});
    })
}
slideLayout(slideWidth, slideMargin);

// 중앙 배치하기
function setSlidePos (){
    var ulMoveAmt = -moveAmt * slideCount + 'px' ;
    slides.css({transform: `translateX(${ulMoveAmt})`});
}
setSlidePos();

// 좌우 버튼 슬라이드 작동하기
nextBtn.click(function(){
    moveSlide(currentIdx + 1);
})
prevBtn.click(function(){
    moveSlide(currentIdx - 1);
})

// 슬라이드 이동 함수
function moveSlide(num){
    /* 
        num의 숫자를 이용해서 slides left값이 변경, animate 메서드 0.5초
    */
    slides.stop().animate({left: moveAmt * -num + 'px'}, 500, function(){
        if(currentIdx == slideCount || currentIdx == -slideCount){
            slides.css({left: '0px'});
            currentIdx = 0;
        }
    });
    currentIdx = num;
    console.log(currentIdx, slideCount);
}
