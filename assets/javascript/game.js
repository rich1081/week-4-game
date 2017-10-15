$(document).ready(function() {

var computerNumber;
var lost = 0;
var win = 0;
var addedClick = 0;




$("#ring").empty();

//creates a random number between 19 to 120. 
computerNumber = Math.floor(Math.random() *101) +19;
//console.log(computerNumber);

//generated number from computer is posted in the dom.
$("#computerNumber").html("Random Number: " + computerNumber);

	for (var i = 0; i < 4; i++){

	var random = Math.floor(Math.random() * 11) + 1;
	//console.log(random);

	var ringPicture = $("<img>");

	// First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.

    ringPicture.addClass("ringPicture");
	ringPicture.attr("src", "https://vignette3.wikia.nocookie.net/gltas/images/8/8c/Blue_lantern_ring_by_kalel7-d5hsqzu.png/revision/latest?cb=20170211201724");
	ringPicture.attr("data-crystalvalue", random);

    
    $("#ring").append(ringPicture);

	}

//click the ring picture function

$(document).on('click', ".ringPicture", function() {

  //$(".ringPicture").on("click", function(){

  	var ringValue = ($(this).attr("data-crystalvalue"));
    
    ringValue = parseInt(ringValue);

    addedClick += ringValue;


    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#addedClick").html("Total Score: " + addedClick);

    if (addedClick === computerNumber) {
      
      win++;

      $("#win").html("Wins " + win);
 

      alert("You win!");

      addedClick = 0;

      computerNumber = Math.floor(Math.random() *101) +19;
//console.log(computerNumber);

//generated number from computer is posted in the dom.
$("#computerNumber").html("Random Number: " + computerNumber);
    }

    else if (addedClick > computerNumber) {

    	lost++;

    	$("#lost").html("Losses " + lost);

      alert("You lose!!");

      addedClick = 0;

      computerNumber = Math.floor(Math.random() *101) +19;
//console.log(computerNumber);

//generated number from computer is posted in the dom.
$("#computerNumber").html("Random Number: " + computerNumber);
    }

  });



 //Pseudocode
 // need for crystals to click on
 //each crystal should generate a random number from 1-12
 //a new random number needs to generate everytime win or lose for each crystal
 //need 4 crystals
 //when clicking any crystal, it should add with the addedClick result.  the total number user try to match is between 19-120
 //if equals teh total score the
 //it is not equal player lose and user starts over and increment the lost count
 //if it is eqaul the user wins and increment win counter.



});



