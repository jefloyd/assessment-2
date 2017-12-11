$( document ).ready(function() {


///////SET CONDITION TO MOVE RACER 1 HERE///////

//keycode 39 = right arrow (Blue motorbike)
$(document).keyup(function(event) {//these two function are the same. One for racer1 key 29 and racer2 key 32.
	console.log('hi3');
	if (event.which == 39) {
		$('#racer1').css('margin-left', '+=5%');
	}


});//end of the keyup for 39 function 

//////SET CONDIDITON TO MOVE RACER 2 HERE///////	

//keycode 90 = Z button (Green motorbike)
$(document).keyup(function(event) {  //this line grabs hold of the HTML doc and tells it to listen for a keyup even 
	if (event.which == 90) { //this line says that if the keyup function is keycode90 to perform line below
		$('#racer2').css('margin-left', '+=5%');//if keycode ==32 increase the left margin 5%.

	}
});//end of the key up for 90 function
////////SET WIN CONDITION BELOW HERE///////////

if($('#racer1').css("margin-left")=="90%") {  //this line should specify that if #racer1/2's css margin is == 90% 
         //do something here
         alert("Racer1 WINS!"); //alert for when left margin == 90%
      }
   
});

	
});//end of the document.ready(function) line