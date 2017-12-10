$( document ).ready(function() {

$(document).keyup(function(event) {
	console.log('hi3');
	if (event.which == 39) {
		$('#racer1').css('margin-left', '+=5%');

	}

});// this is hte end of the keyup for 39 function


$(document).keyup(function(event) {  //this line grabs hold of the HTML doc and tells it to listen for a keyup even 
	if (event.which == 32) { //this line says that if the keyup function is keycode 32 to perform line below
		$('#racer2').css('margin-left', '+=5%');//if keycode ==32 increase the left margin 5%.

	}

});//this is the end of the key up for 32 function

// $(document).event(function(event) {
	//if (event.which'#racer1').css('margin-left', '==90%');
	//alert('Racer 1 WINS!');




});//this is the end of the document.ready(function) line