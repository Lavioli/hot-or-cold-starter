'get strict'
var num,
    numInput,
    userFeedback,
    counter = 0;
arr = [];

//generate random number
function generateNum() {
    num = Math.floor((Math.random() * 100) + 1);
    return num;
};

//create a newGame;
function newGame() {
    arr = [];
    generateNum();

}

//feedback
function generateFeedback() {
    if (num === parseInt(numInput)) {
        return $('#feedback').text('Yay! Correct!');
    } else if (Math.abs(num - numInput) < 10) {
        // userFeedback = "hot";
        $('#feedback').text('hot');
    } else if (Math.abs(num - numInput) < 20) {
        // userFeedback = "kinda hot";
        $('#feedback').text('kinda hot');
    } else if (Math.abs(num - numInput) < 30) {
        // userFeedback = "less than warm";
        $('#feedback').text('less than warm');
    } else if (Math.abs(num - numInput) < 99) {
        // userFeedback = "cold";
        $('#feedback').text('warm');
    }
}

//guess counter
function guessCounter(val = 0) {
    (val === 1) ? (counter += 1) : (counter = 0);
    $('#count').text(counter);
}

//push guessed number into array
function guessArr(val) {
    arr.push(val);
}

//check if it's a number, and then add it to the list
function check(val) {
    if ((val % 1) !== 0) {
        alert('Input a number!');
    } else if (val > 100 || val < 0) {
        alert('Choose number between 0 and 100!');
    } else {
        if ((arr.indexOf(val)) !== -1) {
            alert("use another");
        } else {
            $('.guessBox').append("<li>" + val + "</li>");
            guessCounter(1);
        }
    }
}


$(document).ready(function() {
    generateNum();
    $("#guess-form").submit(function(event) {
        event.preventDefault();
        numInput = $("#userGuess").val();
        check(numInput);
        generateFeedback();
        // displayGuess(numInput);
        guessArr(numInput);
        $('input[type="text"], textarea').val('');
    });

    $(".new").click(function(event) {
        $('#guess-form').children('input:not(#guessButton)').val('');
        guessCounter();
        arr = [];
        $('.guessBox').find('li').remove();
        $('#feedback').text('Make your Guess!');
    });

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });
    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });
});

//a counter for guesses make a guess - group 1 lavie alex

//what numbers were guessed in <lil> with ul #guesslist
//


//provide equation to let user know if they are close
//feedback should be in h2#feedback
//a counter for guesses "Make a Guess" - group 1 Lavie Alex
//what numbers were guessed in <li> with ul#guesslist
//make sure inputs for number is valid and prompt if it is not
