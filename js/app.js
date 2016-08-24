var num;

var generateNum = function () {
	 num = Math.floor((Math.random()*100)+1);
	 return num;
 };


$(document).ready(function(){

	$("#guessButton").click(function(event){
		// event.preventdefault();
		var numInput = $("#userGuess").val();
		});


	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


});

// function checkGuess(){
// 	if(userGuess %1 !==0){





//checks to make sure input is



//a counter for guesses make a guess - group 1 lavie alex

//what numbers were guessed in <lil> with ul #guesslist
//


//provide equation to let user know if they are close
//feedback should be in h2#feedback
//a counter for guesses "Make a Guess" - group 1 Lavie Alex
//what numbers were guessed in <li> with ul#guesslist
//make sure inputs for number is valid and prompt if it is not