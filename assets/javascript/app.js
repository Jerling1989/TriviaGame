// LAUNCH SCRIPT ONCE PAGE LOADS
$(document).ready(function() {

// ARRAYS FOR THE GAME CONTENT
var questions = ['What Movie Launched The Marvel Cinematic Universe?', 'What is the Name of Thor&rsquo;s Brother?', 'Who is the First Actor to Play Spiderman in the MCU?', 'What is Peter Quill&rsquo;s Self-Appointed Nickname?', 'What Was Ant-Man&rsquo;s Previous Career?', 'How Many Infinity Stones are in the MCU?', 'What is the Winter Soldier&rsquo;s Name?', 'What are the Only Words Groot Said Besides <q>I Am Groot</q>?', 'What Actor Played Doctor Strange?', 'What Phase is the MCU Currently In?'];
var answerArray = [['THE INCREDIBLE HULK', 'IRONMAN', 'THOR', 'X-MEN'], ['ZEUS', 'APOLLO', 'JEFF', 'LOKI'], ['TOM HOLLAND', 'ANDREW GARFIELD', 'TOBEY MAGUIRE', 'NEIL PATRICK HARRIS'], ['MOON-GOD', 'SPACE-JESUS', 'STAR-LORD', 'LORD-BYRON'], ['CON-ARTIST', 'JEWELER', 'PLUMBER', 'BURGLAR'], ['SIX', 'THREE', 'FIVE', 'TEN'], ['FRANK WATTS', 'BUCKY BARNES', 'FATTY ARBUCKLE', 'NICKY BARNES'], ['WE ARE GROOT', 'I AM HUNGRY', 'I LOVE YOU', 'I LIKE TURTLES'], ['BUTTERCUP PUMPKINPATCH', 'BUFFALO CUSTARDBATH', 'BENEDICT CUMBERBATCH', 'BENEDRYL CUMBERSNATCH'], ['PHASE ONE', 'PHASE TWO', 'PHASE THREE', 'PHASE FOUR']];
var correctArray = ['IRONMAN', 'LOKI', 'TOM HOLLAND', 'STAR-LORD', 'BURGLAR', 'SIX', 'BUCKY BARNES', 'WE ARE GROOT', 'BENEDICT CUMBERBATCH', 'PHASE THREE'];
var gifArray = ['ironman', 'loki', 'tom-holland', 'star-lord', 'burglar', 'six', 'bucky-barnes', 'we-are-groot', 'benedict-cumberbatch', 'phase-three'];

// VARIABLES FOR SCORE COUNT
var totalScore = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var answer;
var i = 0;

// VARIABLES FOR GAME TIMER
var counter = 30;
var intervalId;

// CALLS FUNCTION TO DISPLAY GAME START SCREEN
startScreen();

// CALLS GAME FUNCTION WHEN USER CLICKS 'START GAME'
$('#start-game').click(function(event) {
	questionDisplay();
	countdown();
});

// BRINGS USER BACK TO THE BEGINNING OF THE GAME
$("body").on("click", "#reset-game", function(event){       
	resetGame();
}); 

// CHECKS IF USER GUESS IS THE CORRECT ANSWER
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


// FUNCTION FOR THE START SCREEN OF THE GAME
function startScreen() {
	$('#content').html('');
	$('#time-bomb').html('<img src="assets/images/timer.jpg">');
	$('#content').append('<h3>Play The Marvel Cinematic Universe (MCU) Trivia Game!</h3>');
	$('#content').append('<h5>There Are 10 Questions in the Game.</h5>');
	$('#content').append('<h5>You Will Have 30 Seconds to Answer Each Question.</h5>');
	$('#content').append('<h5>Good Luck!</h5>');
	$('#content').append('<h4 id="start-game">START GAME</h4>');
}

// FUNCTION FOR THE END SCREEN OF THE GAME
function endScreen() {
	$('#content').html('');
	$('#content').append('<h3>GAME OVER!</h3>');
	$('#content').append('<h5>Correct: ' + correctAnswers + '</h5>');
	$('#content').append('<h5>Incorrect: ' + wrongAnswers + '</h5>');
	$('#content').append('<h5>Total Score: ' + totalScore + '%</h5>');
	$('#content').append('<h4 id="reset-game">PLAY AGAIN</h4>');
}

// DISPLAYS THE QUESTIONS TO THE USER
function questionDisplay() {
	$('#content').html('');
	$('#time-bomb').html();
	$('#time-bomb').html('<img src="assets/images/timer.jpg">');
	$('#time-bomb').append('<span id="timer"></span>');
	$('#content').append('<h3 class="question">' + questions[i] + '</h3>');
	$('#content').append('<h4 class="answer">' + answerArray[i][0] + '</h4>');
	$('#content').append('<h4 class="answer">' + answerArray[i][1] + '</h4>');
	$('#content').append('<h4 class="answer">' + answerArray[i][2] + '</h4>');
	$('#content').append('<h4 class="answer">' + answerArray[i][3] + '</h4>');
}

// DISPLAYS IF USER ANSWERS QUESTION CORRECTLY
function correctDisplay() {
	correctAnswers++;
	totalScore = correctAnswers * 10;
	$('#content').html('');
	$('#content').append('<h3 class="temp">CORRECT! ' + correctArray[i] + '</h3>');
	$('#content').append('<img class="answer-img" src="assets/images/gif/' + gifArray[i] + '.gif" />');
	$('#content').append('<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />');
	setTimeout(nextDisplay, 4000);
}

// DISPLAYS IF USER ANSWERS QUESTION INCORRECTLY
function wrongDisplay() {
	wrongAnswers++;
	$('#content').html('');
	$('#content').append('<h3 class="temp">WRONG! ' + correctArray[i] + '</h3>');
	$('#content').append('<img class="answer-img" src="assets/images/gif/' + gifArray[i] + '.gif" />');
	$('#content').append('<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />');
	setTimeout(nextDisplay, 4000);
}

// DISPLAYS IF USER RUNS OUT OF TIME
function timedOutDisplay() {
	wrongAnswers++;
	$('#content').html('');
	$('#content').append('<h3 class="temp">TIMES UP! ' + correctArray[i] + '</h3>');
	$('#content').append('<img class="answer-img" src="assets/images/gif/' + gifArray[i] + '.gif" />');
	$('#content').append('<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />');
	setTimeout(nextDisplay, 4000);
}

// BRINGS ON THE NEXT QUESTION DISPLAY
// AND RESETS THE COUNTER TIME
function nextDisplay() {
	if (i < 9) {
		i++;
		questionDisplay();
		countdown();
		counter = 30;
	} else {
		setTimeout(endScreen, 10900);
	}

}

// TIMER FUNCTION FOR EACH QUESTION (30sec)
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

// RESETS THE GAME VARIABLES AND RETURNS USER TO THE START SCREEN
function resetGame() {
    i = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    totalScore = 0;
    timedOut = 0;
    counter = 30;
    questionDisplay();
    countdown();
}


});