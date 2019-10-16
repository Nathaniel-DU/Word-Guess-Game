//word array 
var posibleWords = ["breaking bad","x-files","the office","parks and rec","friends","bones","new girl","game of thrones","walking dead","monk","burn notice","orange is the new black","peaky blinders"]

//tracking vars
var wins = 0;
var losses = 0;
var remainingGuesses = 15;

//html display
var totalWins = document.getElementById("total-wins");
var currentWord = document.getElementById("current-word");
var remainingGuesses = document.getElementById("remaining-guesses");
var guessedLetters = document.getElementById("guessed-letters");

//word math
var word = possibleWords[Math.floor(Math.random() * possibleWords.length)];
var newWord = word;
var letterLefttoFind = word.length;


gameStart()

document.onkeypress = function(event) {
    var playerGuess = event
}
   