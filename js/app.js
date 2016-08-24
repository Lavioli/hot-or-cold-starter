/*
difference: >50  -> 'Icd cold'
30 - 50 cold
20-30 warm
10-20 hot
1- 10 very hot
*/


var num,
    numInput,
    userFeedback;
    arr = [];

var generateNum = function() {
    num = Math.floor((Math.random() * 100) + 1);
    return num;
};


//create a newGame;
function newGame() {
    // resetVariables();
    // render();
    generateNum();
}

//Feedback
function generateFeedback() {
    if (num === numInput) {
    	userFeedback = "you are cool";
    } else if (Math.abs(num - numInput) < 10) {
        userFeedback = "hot";
    } else if (Math.abs(num - numInput) < 20) {
        userFeedback = "kinda hot";
    } else if (Math.abs(num - numInput) < 30) {
        userFeedback = "less than warm";
    } else {
        userFeedback = "cold";
    }
    console.log(userFeedback);
}

$(document).ready(function() {

    generateNum();

    $("#guess-form").submit(function(event) {
        event.preventDefault();
        numInput = parseInt($("#userGuess").val());
    });

    $(".new").click(function(event) {
        // event.preventdefault(); **NEED TO ASK, NOT SURE HOW TO STOP REFRESH WHEN INSERTING NUMINPUT AGAIN
        newGame();
    });

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    function check() {
        if ((numInput % 1) !== 0) { //if not a number
            alert('Input a number!');
        } else if (numInput > 100) {
        	alert('Choose number between 0 and 100!');
        } 
    }

});

// function alreadyUsed(number) {
// 	num
// }

// function checkRepeat(list) {
// 	for()
// }

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
