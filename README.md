# Word-Guess-Game
Word Guess Game
About
This is my word guess game, its not as good as I wanted, but I did my best and put in around 25 hours of struggle, so Im proud of it. 

Demo
link to my application. https://nathaniel-du.github.io/Word-Guess-Game/

Requirements
Here are the vital functions:

document.onkeypress = onKeyFunc;

function onKeyFunc(event) {
    var letter = event.key;
    if(newWord.includes(letter)){
        console.log(letter)
        if(!correctGuess.includes(letter)){
            correctGuess.push(letter);
            ReplaceLetters(displayWord, newWord, letter);
        } else {

this is the key press function, it lets the user know if they guessed right or wrong and tracks keystroke.


else {
        remainingGuesses--;
        remainingGuessesText.textContent = remainingGuesses;

        if (remainingGuesses === 0) {
            alert ("THE GAME IS OVER AND YOU LOSE");
            gameStart();


This statement will alert the user to a loss and restart the game.            

technologies used:

Bootstrap
jQuery
CSS
