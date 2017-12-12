$( document ).ready(function() {


///////SET CONDITION TO MOVE RACER 1 HERE///////

//keycode 39 = right arrow (Blue motorbike)
var bike1 = $(document).keyup(function(event) {//these two function are the same. One for racer1 key 29 and racer2 key 32.
	console.log('hi3');
	if (event.which == 39) {
		$('#racer1').css('margin-left', '+=2%')
		if($('#racer1').css('margin-left') >= '98%'){
		alert('Racer 1 WINS!');
	}
}

});//end of the keyup for 39 function 

//////SET CONDIDITON TO MOVE RACER 2 HERE///////	

//keycode 90 = Z button (Green motorbike)
var bike2 = $(document).keyup(function(event) {  //this line grabs hold of the HTML doc and tells it to listen for a keyup even 
	if (event.which == 90) { //this line says that if the keyup function is keycode 90 to perform line below
		$('#racer2').css('margin-left', '+=2%')//if keycode ==32 increase the left margin 5%.
		if($('#racer2').css('margin-left') >= '98%'){
		alert('Racer 2 WINS!');
	} 
	
}

});//end of the key up for 90 function

////////SET WIN CONDITION BELOW HERE////////////





	
});//end of the document.ready(function) line