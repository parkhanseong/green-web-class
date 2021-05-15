var img = document.querySelectorAll('.gallery img'),
    lightbox = document.querySelector('.overlay'),
    lightboxImg = lightbox.querySelector('img');

    for(var i =0; i < img.length; i++) {
        img[i].addEventListener('click', function() {
            var imgNewSrc = this.getAttribute('data-lightbox');
            console.log(imgNewSrc);
            // src의 경로 지정
            lightboxImg.setAttribute('src', imgNewSrc);
            // lightbox 보이기
            lightbox.classList.add('visible');
        });
    }

    // lightbox를 클릭하면 다시 숨기기
    lightbox.addEventListener('click', function(){
        lightbox.classList.remove('visible');
    })