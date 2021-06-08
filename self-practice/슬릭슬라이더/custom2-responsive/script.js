$(function(){
    const swiper = new Swiper('.multiple', {
        // direction: 'vertical',
        direction: 'horizontal',
        loop: true,
        // 페이징 기능 추가
        pagination: {
            el: '.swiper-pagination',
            type: "bullets",
            clickable: 'bullets'
            // 'bullets' | 'fraction' | 'progressbar' | 'custom'
        },
        navigation: {
            // 페이지 기능 추가
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
        },
        slidesPerView: 3,
        spaceBetween: 10,
        // Responsive breakpoins
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });
    
    $("#next").click(function(){
        swiper.slideNext();
    })
    $("#prev").click(function(){
        swiper.slidePrev();
    })
})

 