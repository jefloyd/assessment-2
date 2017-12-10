$( document ).ready(function() {

$(document).keyup(function(event) {
	console.log('hi3');
	if (event.which == 39) {
		$('#racer1').css('margin-left', '+=2%');

	}


});

$(document).keyup(function(event) {
	console.log('hi3');
	if (event.which == 39) {
		$('#racer1').css('margin-left', '+=90%');
		alert("PLAYER 1 WINS!");

	}


});


$(document).keyup(function(event) {
	if (event.which == 32) {
		$('#racer2').css('margin-left', '+=2%');

	}

});







});