'use strict';

var slideWrapper = $('.slide_wrapper'),
    slides = slideWrapper.find('.slides'),
    slide = slides.find('li'),
    prevBtn = slideWrapper.find('.prev'),
    nextBtn = slideWrapper.find('.next'), 

    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 200,
    slideMargin = 30,
    moveAmt,
    newSlides,
    newSlideWidth,
    newSlideWidth = slideWidth;
    // maxSlides = 3,
    // responsiveMargin = 20,

    // 복사본 생성하기 뒤에 5개 추가
    var clonedSlidesAppend = slide.clone().addClass('clone');
    slides.append(clonedSlidesAppend);
    
    // 복사본 생성하기 앞에 5개 추가
    var clonedSlidesPrepend = slide.clone().addClass('clone');
    slides.prepend(clonedSlidesPrepend);

    // 가로배열하기(slideWidth, slideMargin)
    function slideLayout(slideWidth, slideMargin){
        newSlides = $('.slide_wrapper li');
        moveAmt = slideWidth + slideMargin;
        newSlides.each(function(idx){
            $(this).css({left: moveAmt * idx + 'px', width: slideWidth});
        });
    }
    slideLayout(slideWidth, slideMargin);

    // 중앙배치하기
    function setSlidePos(){
        // 전체 ul 크기 계산해서 -X축으로 이동
        var ulMoveAmt = -moveAmt * slideCount + 'px'
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
            num의 숫자를 이용해서 slides left값이 변경. animate 메서드 0.5초
        */
        slides.stop().animate({left:moveAmt * -num + 'px'}, 500, function(){
            if(currentIdx == slideCount || currentIdx == -slideCount){
                console.log(currentIdx, slideCount);
                slides.css({left: '0px'});
                currentIdx = 0;
            }
        });
        currentIdx = num;
    }