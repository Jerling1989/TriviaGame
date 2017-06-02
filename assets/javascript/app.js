$(document).ready(function() {


var number = 30;
var intervalId;


function run() {
	intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

	//  Decrease number by one.
	number--;

	//  Show the number in the #show-number tag.
	$("#timer").html("<h2>-" + number + "</h2>");


	//  Once number hits zero...
	if (number === 0) {

	//  ...run the stop function.
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

run();


});