var correct = 0;
var incorrect = 0;
var unanswered = 0;
//var selectedAnswers
//var results

//array holding the trivia questions
var questionContent = [
	["Which is the oldest operating airline in the world?"],
	["Which iconic aircraft was grounded for over a month in 1979 after a series of high-profile accidents?"]
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


//Pseudocode
//Show title screen with a start button
//Click start button to begin game
//Show first question
//Set timer for 30 seconds
//Player can choose only 1 answer the question 
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

