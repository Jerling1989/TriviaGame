$(document).ready(function() {


var questions = ['What Movie Launched The Marvel Cinematic Universe?', 'What is the Name of Thor&rsquo;s Brother?', 'Who is the First Actor to Play Spiderman in the MCU?', 'What is Peter Quill&rsquo;s Self-Appointed Nickname?', 'What Was Ant-Man&rsquo;s Previous Career?', 'How Many Infinity Stones are in the MCU?', 'What is the Winter Soldier&rsquo;s Name?', 'What are the Only Words Groot Said Besides “I Am Groot”?', 'What Actor Played Doctor Strange?', 'What Phase is the MCU Currently In?'];
var answerArray = [['THE INCREDIBLE HULK', 'IRONMAN', 'THOR', 'X-MEN'], ['ZEUS', 'APOLLO', 'JEFF', 'LOKI'], ['TOM HOLLAND', 'ANDREW GARFIELD', 'TOBEY MAGUIRE', 'NEIL PATRICK HARRIS'], ['MOON-GOD', 'SPACE-JESUS', 'STAR-LORD', 'LORD-BYRON'], ['CON-ARTIST', 'JEWELER', 'PLUMBER', 'BURGLAR'], ['SIX', 'THREE', 'FIVE', 'TEN'], ['FRANK WATTS', 'BUCKY BARNES', 'FATTY ARBUCKLE', 'NICKY BARNES'], ['WE ARE GROOT', 'I AM HUNGRY', 'I LOVE YOU', 'I LIKE TURTLES'], ['BUTTERCUP PUMPKINPATCH', 'BUFFALO CUSTARDBATH', 'BENEDICT CUMBERBATCH', 'BENEDRYL CUMBERSNATCH'], ['PHASE ONE', 'PHASE TWO', 'PHASE THREE', 'PHASE FOUR']];
var correctArray = ['IRONMAN', 'LOKI', 'TOM HOLLAND', 'STAR-LORD', 'BURGLAR', 'SIX', 'BUCKY BARNES', 'WE ARE GROOT', 'BENEDICT CUMBERBATCH', 'PHASE THREE'];
var gifArray = ['"https://giphy.com/embed/qmfpjpAT2fJRK" width="480" height="300" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/KiaAwaemKWhVu" width="480" height="259" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/I2LasqroRY8Mg" width="480" height="270" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/QgCwRigEAxqGQ" width="480" height="294" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/h0gzUb0Wh1RIY" width="480" height="300" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/aqMY57vLdkghi" width="480" height="198" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/oyyXEHFEZPLCo" width="480" height="274" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/F9hQLAVhWnL56" width="480" height="300" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/dvWvnRdc4h440" width="480" height="270" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/RjSRwCJRhRB9S" width="480" height="300" frameBorder="0" class="giphy-embed"'];

var correctAnswers = 0;
var wrongAnswers = 0;
var timedOut = 0;
var answer;
var i = 0;

var counter = 30;
var intervalId;

// Displays Start Screen
startScreen();

// Begins When User Presses 'START GAME'
$('#start-game').click(function(event) {
	questionDisplay();
	countdown();
});

// Checks if User Guess is Correct
$("body").on("click", ".answer", function(event){
    answer = $(this).text();
    if(answer === correctArray[i]) {
        
        clearInterval(intervalId);
        correctDisplay();
    } else {  
        clearInterval(intervalId);
        wrongDisplay();
    }
}); 


// Start Screen of Game
function startScreen() {
	$('#content').html('');
	$('#content').append('<h3>Play The Marvel Cinematic Universe Trivia Game!</h3>');
	$('#content').append('<h5>There Are 10 Questions in the Game.</h5>');
	$('#content').append('<h5>You Will Have 30 Seconds to Answer Each Question.</h5>');
	$('#content').append('<h5>Good Luck!</h5>');
	$('#content').append('<h4 id="start-game">START GAME</h4>');
}

// Displays the Questions to the User
function questionDisplay() {
	$('#content').html('');
	$('#time-bomb').append('<span id="timer"></span>');
	$('#content').append('<h3 class="question">' + questions[i] + '</h3>');
	$('#content').append('<h4 class="answer">' + answerArray[i][0] + '</h4>');
	$('#content').append('<h4 class="answer">' + answerArray[i][1] + '</h4>');
	$('#content').append('<h4 class="answer">' + answerArray[i][2] + '</h4>');
	$('#content').append('<h4 class="answer">' + answerArray[i][3] + '</h4>');
}

// Displays if User Guesses Correctly
function correctDisplay() {
	correctAnswers++;
	$('#content').html('');
	$('#content').append('<h3 class="temp">CORRECT! ' + correctArray[i] + '</h3>');
	$('#content').append('<iframe src=' + gifArray[i] + '></iframe>');
	setTimeout(nextDisplay, 3000);
}

// Displays if User Guesses Incorrectly
function wrongDisplay() {
	wrongAnswers++;
	$('#content').html('');
	$('#content').append('<h3 class="temp">WRONG! ' + correctArray[i] + '</h3>');
	$('#content').append('<iframe src=' + gifArray[i] + '></iframe>');
	setTimeout(nextDisplay, 3000);
}

// Displays if User Runs Out of Time
function timedOutDisplay() {
	timedOut++;
	$('#content').html('');
	$('#content').append('<h3 class="temp">TIMES UP! ' + correctArray[i] + '</h3>');
	$('#content').append('<iframe src=' + gifArray[i] + '></iframe>');
	setTimeout(nextDisplay, 3000);
}

// Brings on the Next Question Display and Resets Counter Time 
function nextDisplay() {
	if (i < 9) {
		i++;
		questionDisplay();
		countdown();
		counter = 30;
	}

}

// Timer Function For Each Question (30sec)
function countdown() {
	intervalId = setInterval(decrement, 1000);
	function decrement() {
	counter--;
	$("#timer").html("<h2>-" + counter + "</h2>");
		if (counter === 0) {
			clearInterval(intervalId);
			timedOutDisplay();
		}
	}
}




});