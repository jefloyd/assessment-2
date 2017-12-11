$( document ).ready(function() {

$(document).keyup(function(event) {//these two function are the same. One for racer1 key 29 and racer2 key 32.
	console.log('hi3');
	if (event.which == 39) {
		$('#racer1').css('margin-left', '+=5%');
	}


});//end of the keyup for 39 function 

	

$(document).keyup(function(event) {  //this line grabs hold of the HTML doc and tells it to listen for a keyup even 
	if (event.which == 32) { //this line says that if the keyup function is keycode 32 to perform line below
		$('#racer2').css('margin-left', '+=5%');//if keycode ==32 increase the left margin 5%.

	}


/*$(document).ready(function(){
	setInterval(function(){
		if ($("#racer1").css('margin-left')=='90%'){
			alert("Racer1 WINS!");
		}
	}

});*/

	if (event.which == 'margin-left'){ 
		$('#racer2').css('margin-left', '==90%'){
		alert("RACER 2 WINS!");
		}
	}

	

});//end of the key up for 32 function




});//end of the document.ready(function) line