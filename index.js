var inquirer = require("inquirer");
var Word = require("./word");
var Letter = require("./letter")
var guessingWord = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var playingWord = "";
var currentWord = "";
var wordOptions = ["adventure", "animals", "backpack", "campground", "campfire", "cabin", "compass", "equipment", "flashlight", "fishing", "forest", "hammock", "hike", "lantern", "nature", "outdoors", "outside", "sunscreen", "tent", "waterfall"];

// Selecting a random word
chooseWord();
function chooseWord() {
    currentWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    console.log(currentWord)
    // Creating a new Word with the constructor and storing it in playingWord
    playingWord = new Word(currentWord)
}

// Logging all the letters in target word
function targetLettersLogged() {
    for (i = 0; i < playingWord.targetWord.length; i++) {
        playingWord.addLetter(playingWord.targetWord[i], false);
    }
}
targetLettersLogged();

// Rendering initial guessingWord
function render() {
    for (i = 0; i < playingWord.lettersArray.length; i++) {
        guessingWord[i] = "_"

    }
}
render();

// Generating the placeholder
function placeholder() {
    for (i = 0; i < playingWord.lettersArray.length; i++) {
        if (playingWord.lettersArray[i].isLetterGuessed === true) {
            guessingWord[i] = (playingWord.lettersArray[i].targetLetter)
        }
    }
}


function inquirerLetterGuess() {
    inquirer.prompt([
        {
            type: "input",
            name: "letter",
            message: "What is your letter selection?"
        }
    ]).then(function (userGuess) {
        console.log(userGuess.letter);

        // Logging incorrect or correct guesses, subtracts guesses remaining when guess a wrong letter
        if (playingWord.targetWord.includes(userGuess.letter)) {
            console.log("CORRECT!")
        }
        else {
            console.log("INCORRECT!");
            guessesRemaining--;
            console.log("Number of guesses remaining: " + guessesRemaining);

        }

        for (i = 0; i < playingWord.targetWord.length; i++) {
            playingWord.lettersArray[i].boolean(userGuess.letter);
        };
        placeholder()
        if (guessingWord.join('') === playingWord.targetWord) {
            wins++;
            console.log("You win! Correct word was " + playingWord.targetWord + ". Play again: ");
            reset()
        }

        else if (guessesRemaining === 0) {
            losses++;
            console.log("You lose! Play again: ");
            reset();
        }
        else {
            console.log("Guess a letter: " + guessingWord.join(" "))
            inquirerLetterGuess()
        };


    })
}


inquirerLetterGuess()

function reset() {
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    chooseWord();
    targetLettersLogged();
    guessingWord = [];
    guessesRemaining = 10;
    render();
    inquirerLetterGuess();
};