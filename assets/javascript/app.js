$(document).ready(function() {

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var selectedAnswer;
var results;
var questionNumber = 0;
var triviaOutput;
var questionTimer = 30;
var countDown;

//array holding the trivia questions
var questionContent = [
	"Which is the oldest operating airline in the world?", 
	"Which iconic aircraft was grounded for over a month in 1979 after a series of high-profile accidents?"
	];

//array holding the options to answer	
var answerOptions = [
	["Delta", "Aeroflot", "Avianca", "KLM"],
	["McDonnell Douglas DC-10", "Boeing 747", "Lockheed L-1011 TriStar", "Airbus 340"]
	];

//array holding the correct answers
var correctAnswers = ["KLM", "McDonnell Douglas DC-10"];

//array holding the images for each answer
var images = ["<img src='assets/images/giphy-klm.gif'>", "<img src='assets/images/aa-flight-191.jpg'>"];


//function to start the game//
$("body").on("click", "#start-game", function(event){
	$("#start-game").hide();
	showTriviaGame();
	gameTimer();
});

//onclick event to choose answer
$("body").on("click", ".answer", function(event){
	selectedAnswer = $(this).text();
	
	//if player chooses right answer
	if(selectedAnswer === correctAnswers[questionNumber]) {
		

		//timer stops
		clearInterval(countDown);
		addCorrectAnswer();
	}
	else {
		//if wrong answer is chosen
		clearInterval(countDown);
		addWrongAnswer();
	}
}); 

//on click event for resetting game
$("body").on("click", "#redo", function(event){
	resetGame();
}); 


//handles when game times out; adds to wrong questions.
function wrongAnswerTimeOut() {
	unanswered++;
	triviaOutput = "<p>Time Remaining: <span class='timer'>" + questionTimer + "</span></p>" + "<p>Time's up!  The correct answer is: " + correctAnswers[questionNumber] + "</p>" + images[questionNumber];
	$("#question-answers").html(triviaOutput);
	setTimeout(nextQuestion, 3000);  
}

//handles when answer is correct; adds to correct questions.
function addCorrectAnswer() {
	correct++;
	triviaOutput = "<p>Time Remaining: <span class='timer'>" + questionTimer + "</span></p>" + "<p>Congratulations -- you are correct!The correct answer is: " + correctAnswers[questionNumber] + "</p>" + images[questionNumber];
	$("#question-answers").html(triviaOutput);
	setTimeout(nextQuestion, 3000);  
}

//handles when answer is wrong; adds to wrong question tally.
function addWrongAnswer() {
	incorrect++;
	triviaOutput = "<p>Time Remaining: <span class='timer'>" + questionTimer + "</span></p>" + "<p>Not quite! The correct answer is: " + correctAnswers[questionNumber] + "</p>" + images[questionNumber];
	$("#question-answers").html(triviaOutput);
	setTimeout(nextQuestion, 3000);
}

//function to generate question and answer content
function showTriviaGame() {
	triviaOutput = "<p>Time Remaining: <span class='timer'>30</span></p><p>" + questionContent[questionNumber] + "<button class='first-answer answer'>A. " + answerOptions[questionNumber][0] + "</button><button class='answer'>B. " + answerOptions[questionNumber][1] + "</button><button class='answer'>C. " + answerOptions[questionNumber][2] + "</button><button class='answer'>D. " + answerOptions[questionNumber][3] + "</button>";
	$("#question-answers").html(triviaOutput);
	//hides Play again button
	document.getElementById("redo").style.display = "none";
}

//moves to next question when question is answered or times out
function nextQuestion() {
	if (questionNumber < 1) {
	questionNumber++;
	showTriviaGame();
	questionTimer = 30;
	gameTimer();
	}
	else {
		resultsScreen();
		$("#results").show();
	}
}

//handles the time for the game
function gameTimer() {
	countDown = setInterval(clockIsTicking, 1000);
	function clockIsTicking() {
		if (questionTimer === 0) {
			clearInterval(countDown);
			wrongAnswerTimeOut();
		}
		if (questionTimer > 0) {
			questionTimer--;
		}
		$(".timer").html(questionTimer);
	}
}

//shows results screen
function resultsScreen() {
	triviaOutput = "<p>Here's your score!" + "</p>" + "<p>Correct Answers: " + correct + "</p>" + "<p>Wrong Answers: " + incorrect + "</p>" + "<p>Unanswered: " + unanswered + "</p>";
	$("#results").html(triviaOutput);
	//reveals Play Again button which is hidden by CSS when game first starts
	document.getElementById("redo").style.display = "inline";
}

//resets game
function resetGame() {
	$("#results").hide();
	questionNumber = 0;
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	questionTimer = 30;
	showTriviaGame();
	gameTimer();
}

});




//Pseudocode
//Show title screen with a start button
//Click start button to begin game
//Show first question
//Set timer for 30 seconds
//Player can choose only 1 answer to the question 
//Show question until
	//Player answers or
	//Time runs out
//Advance automatically to feedback screen after either event
//Show feedback screen for 5 seconds
	//if correct - say Congratulations! and show correct answer
	//if incorrect - say Nope! and show correct answer
	//if unanswered - say Time's up and show correct answer
//Repeat process for show question, advance to feedback, and show feedback for the remaining questions
//When last question is done advance to final screen
//On final screen show restart button and 
	//number of correct answers
	//wrong answers 
	//unanswered questions

