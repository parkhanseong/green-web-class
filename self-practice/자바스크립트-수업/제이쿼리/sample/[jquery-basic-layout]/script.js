$(function(){

    // toggle animation
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active');
        $('.gnb').toggleClass('active');
    })

    // go to top 보이기
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }

        if($(this).scrollTop() > 300){
            $('#goToTop').addClass('visible');
        }else{
            $('#goToTop').removeClass('visible');
        }
    })

    var $contents = $('section');

    // go to top 이동하기
    $('#goToTop').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000)
    })

    $('.gnb__item').click(function(e){
        e.preventDefault();
        var index = $(this).index();
        var section = $contents.eq(index);
        var sectionDistance = section.offset().top;

        $('.gnb').toggleClass('active');
        $('html, body').stop().animate({scrollTop: sectionDistance});
    })

});