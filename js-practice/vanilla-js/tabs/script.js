'use strict';

document.getElementById('tabs-1').style.display = 'block';

// 링크를 클릭하면 href 속성의 값을 변수 tabTarget 저장
// 저장된 값에서 #을 삭제한다
// tabTarget = #tabs-1 #을 삭제한다
var targetLink = document.querySelectorAll('.tab-menu a');
var tabContent = document.querySelectorAll('.tab-content > div');

for(var i = 0; i < targetLink.length; i++){
    targetLink[i].addEventListener('click', function(e){
        e.preventDefault();
        
        var orgTarget = e.target.getAttribute('href');
        var tabTarget = orgTarget.replace('#', '');

        for(var x = 0; x < tabContent.length; x++){
            console.log(x);
            tabContent[x].style.display = 'none';
        }
        document.getElementById(tabTarget).style.display = 'block';
    })
}


