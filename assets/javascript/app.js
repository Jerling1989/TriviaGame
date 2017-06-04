$(document).ready(function() {


var number = 31;
var intervalId;
var correctAnswers = 0;
var wrongAnswers = 0;


function run() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	number--;
	$("#timer").html("<h2>-" + number + "</h2>");
	if (number === 0) {
	stop();
	}
}


function stop() {
  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);

  if (number === 0) {
    number = 30;
  }

}


$('#start-game').click(questionOne);


function questionOne() {
	run();
	$('.temp').remove();
	$('#time-bomb').append('<span id="timer"></span>');
	$('#content').append('<h3 class="temp">What Movie Launched The Marvel Cinematic Universe?</h3>');
	$('#content').append('<h4 class="temp" id="wrong1">THE INCREDIBLE HULK</h4>');
	$('#content').append('<h4 class="temp" id="correct">IRONMAN</h4>');
	$('#content').append('<h4 class="temp" id="wrong2">THOR</h4>');
	$('#content').append('<h4 class="temp" id="wrong3">X-MEN</h4>');

	$('#wrong1,#wrong2,#wrong3').click(answerOneWrong);
	$('#correct').click(answerOneCorrect);


}

function answerOneCorrect() {
	correctAnswers++;
	$('.temp').remove();
	stop();
	$('#content').append('<h3 class="temp">CORRECT! IRONMAN</h3>');
	$('#content').append('<iframe src="https://giphy.com/embed/qmfpjpAT2fJRK" width="480" height="366" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>');

}

function answerOneWrong() {
	wrongAnswers++;
	$('.temp').remove();
	stop();
	$('#content').append('<h3 class="temp">WRONG! IRONMAN</h3>');
	$('#content').append('<iframe src="https://giphy.com/embed/qmfpjpAT2fJRK" width="480" height="366" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>');

}












});