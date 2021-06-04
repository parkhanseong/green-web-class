var slideWrapper = $('.slide-wrapper'),
    slides = $('.slides'),
    slide = slides.find('li'),
    btnPrev = $('.prev'),
    btnNext = $('.next'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 200,
    slideMargin = 30,
    moveAmt,
    newSlides,
    newSlideWidth,
    newSlideWidth = slideWidth;

    // 원본 복제하기 > 직접 마크업 해주지 않는다
    slides.append(slide.clone().addClass('clone'));
    slides.prepend(slide.clone().addClass('clone'));

    console.log('>> js load >>');

    // 전체 li > 가로 배열하기
    function slideLayout(sw, sm){
        newSlides = $('.slide-wrapper li');
        moveAmt = slideWidth + slideMargin;
        newSlides.each(function(idx){
            $(this).css({left: moveAmt * idx + 'px'});
        })
    }
    slideLayout(slideWidth, slideMargin);

    // 보여지는 slide 부분 >  중앙 배치하기
    function setSlidePos(){
        var ulMoveAmt = -moveAmt * slideCount + 'px';
        slides.css({transform: `translateX(${ulMoveAmt})`})
    }
    setSlidePos();

    // 좌우 슬라이드 버튼
    btnNext.click(function(){
        moveSlide(currentIdx + 1);
    })
    btnPrev.click(function(){
        moveSlide(currentIdx - 1);
    })

    // 슬라이드 이동 함수
    function moveSlide(num){
        slides.stop().animate({left: moveAmt * -num + 'px'}, 500, function(){
            if(currentIdx == slideCount || currentIdx == -slideCount){
                
                console.log('>>> currentIdx : '+ currentIdx);

                slides.css({left: '0px'});
                currentIdx = 0;
            }
        });
        currentIdx = num;
    }