var panelQuestion = document.querySelectorAll('.panel-question');
var collapseBtn = document.querySelector('#btn-collapse');

for(var i = 0; i < panelQuestion.length; i++){
    panelQuestion[i].addEventListener('click', function(){
        closeAll();    
        this.classList.add('active');
    })
}

collapseBtn.addEventListener('click', function(){
    closeAll();
})

function closeAll() {
    for(var x = 0; x < panelQuestion.length; x++){
        panelQuestion[x].classList.remove('active');
    }
}