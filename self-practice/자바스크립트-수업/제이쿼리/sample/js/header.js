// 문서가 준비되면 실행해라
// $(document).ready(function(){
//     console.log('>>> document')
// });
'use strict';

$(function(){
    var $header = $('header');
    var $menu = $('.gnb a');
    var $contents = $('section');

    // header 스크롤 이벤트
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $header.addClass('sticky');
        }else{
            $header.removeClass('sticky');
        }
    });

    $('.toggle').click(function(){
        $(this).toggleClass('active');
    });

    // gnb 클릭 이벤트
    $menu.click(function(e){
        e.preventDefault();
        
        var index = $(this).index();
        var section = $contents.eq(index);
        var sectionDistance = section.offset().top;

        // A.scrollTop() 스크롤양을 확인
        $('html, body').stop().animate({scrollTop: sectionDistance});
    });

    // 스크롤 헤더 메뉴 이벤트
    $(window).scroll(function(){

        console.log($contents);

        $contents.each(function(){

                // var idx = $(this).index();
                //     console.log(idx);
            
            if($(this).offset().top <= $(window).scrollTop()){

                var idx = $(this).index();
                
                console.log(" >>>> 섹션 : " + $(this).offset().top);
                console.log(" >>>> 스크롤 : " + $(window).scrollTop());
            //     console.log($(this));
                console.log(idx);

                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');

            };
        });
    });

});