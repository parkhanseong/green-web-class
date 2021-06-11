$(document).ready(function(){
    // basic slider 
    $('.main__banner').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
    // multi slider
    $('.custom-slider').slick({
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
    });

    // responsive
    $('.responsive-slider').slick({
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


});