$(function(){

    // trigger
    $('.trigger').click(function(){
        $(this).toggleClass('active');
        $('.gnb').toggleClass('active');
    })

    $('.gnb a').click(function(){
        $('.gnb, .trigger').removeClass('active');
    })

    // sliding jquery
    $('.gnb a, .goToTop').click(function(e){
        $.scrollTo(this.hash || 0, 800);
        e.preventDefault();
    })

    $(window).scroll(function(){
        if($(window).scrollTop() > 50 ) {
            $('header, .goToTop').addClass('active')
        }
        else {
            $('header, .goToTop').removeClass('active')
        }
    })

    // slick.js
    $('.mySlider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
})