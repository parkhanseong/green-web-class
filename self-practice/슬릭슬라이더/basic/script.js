$(function(){
    const swiper = new Swiper('.swiper-container', {
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
    });
    
    $("#next").click(function(){
        swiper.slideNext();
    })
    $("#prev").click(function(){
        swiper.slidePrev();
    })
})