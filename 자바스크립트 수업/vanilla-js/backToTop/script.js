'use strict';

// 변수 지정하기
var backToTop = document.getElementById('backToTop');
// html 문서 자체를 가지고 온다
var docElem = document.documentElement;
var offset;
var scrollPos;
var docHeight;

// 문서 높이 계산하기
docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

if(docHeight != 0) {
    offset = docHeight / 4;
}

// 스크롤 이벤트 추가
window.addEventListener('scroll', function(){
    scrollPos = docElem.scrollTop;
    backToTop.className = (scrollPos > offset ) ? 'visible' : '';
})

// 클릭 이벤트 추가
backToTop.addEventListener('click', function(e) {
    e.preventDefault(); // a태그는 기본적으로 링크 속성이 있다
    scrollToTop();
})

// 스크롤 부드럽게 올리기
function scrollToTop() {
    var scrollInterval = setInterval(function(){
        if( scrollPos != 0 ){
            // y축으로 -55px씩 빼준다
            window.scrollBy(0, -55);
        }else {
            clearInterval(scrollInterval);
        }
    }, 15);
}