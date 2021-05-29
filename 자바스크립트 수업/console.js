var goToWork = {
    wakeUp : function (){
        console.log('일어나기');
    },
    cleanUp: function() {
        console.log('씻기');
    },
    eatMeal: function(food) {
        console.log('냠냠 아침밥 ' + food);
    },
    driveCar: function() {
        console.log('운전하기')
    }
}

goToWork.wakeUp();
goToWork.cleanUp();
goToWork.eatMeal('부대찌개');