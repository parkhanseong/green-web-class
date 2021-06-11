
$(document).ready(function() {

    new WOW().init();

	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
	    menu: '#myMenu',
		autoScrolling:true,
		scrollHorizontally: true,
        navigation: true,
	});

	//methods
	// $.fn.fullpage.setAllowScrolling(false);
});



