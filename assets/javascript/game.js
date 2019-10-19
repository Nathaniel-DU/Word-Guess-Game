//word array 
var possibleWords = ["breaking bad", "x-files", "the office", "parks and rec", "friends", "bones", "new girl", "game of thrones", "walking dead", "monk", "burn notice", "orange is the new black", "peaky blinders"]
//definitions
var newWord, displayWord, correctGuess, incorrectGuess, wins, losses, remainingGuesses;

//html display
var totalWins = document.getElementById("totalWins");
var currentWord = document.getElementById("currentWord");
var remainingGuessesText = document.getElementById("remainingGuesses");



gameStart()

document.onkeypress = onKeyFunc;

function onKeyFunc(event) {
    var letter = event.key;
    if(newWord.includes(letter)){
        console.log(letter)
        if(!correctGuess.includes(letter)){
            correctGuess.push(letter);
            ReplaceLetters(displayWord, newWord, letter);
        } else {
            console.log("Already Guessed")
        }
    }
    else {
        remainingGuesses--;
        remainingGuessesText.textContent = remainingGuesses;

        if (remainingGuesses === 0) {
            alert ("THE GAME IS OVER AND YOU LOSE");
            gameStart();
        }
    }
}
function ReplaceLetters(dispString, array, letter){
    let newArr = dispString.split(" ");
    console.log(newArr, array, newArr.length, array.length)
    for(var i = 0; i < array.length; i++){
        if(array[i] === letter){
            console.log("Here!")
            newArr[i] = letter;
        }
    }
    displayWord = newArr.join(" ");
    currentWord.innerHTML = displayWord;
}

function gameStart() {
    //tracking vars
    wins = 0;
    losses = 0;
    remainingGuesses = 15;
    //word math
    newWord = GetRandomIndex(possibleWords);
    correctGuess = [];
    incorrectGuess = [];

    displayWord = InitDisplayWord(newWord)
    currentWord.innerHTML = displayWord;
    console.log(newWord)
}

function GetRandomIndex(array) {
    return array[Math.floor(Math.random() * array.length)]
}
function InitDisplayWord(word) {
    let displayArr = [];
    for (var i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            displayArr.push("&nbsp;")
        } else {
            displayArr.push("_")
        }
    }
    return displayArr.join(" ")
}

 