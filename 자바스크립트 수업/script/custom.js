// $('선택자').함수(function(){
//     실행문;
// })
// $('.btn-show').click(function(){
    //     $('.box').css({'display': 'block'});
    // })
    // $('.btn-hide').click(function(){
        //     $('.box').css({'display': 'none'});
        // })
        
$('.box').css({
    'display':'none'
})
$('.btn-event').mouseenter(function(){
    $('.box').show();
})
$('.btn-event').mouseleave(function(){
    $('.box').hide();
})