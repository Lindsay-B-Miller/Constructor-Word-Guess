var inquirer = require("inquirer");
var Word = require("./word");
var Letter = require("./letter")
var guessingWord = [];

// Creating a new Word with the constructor and storing it in blanket
var blanket = new Word("blanket");

// Logging target word
// console.log("Word: " + blanket.targetWord);

// Logging all the letters in target word
for (i = 0; i < blanket.targetWord.length; i++) {
    // console.log(blanket.targetWord[i].split())
    blanket.addLetter(blanket.targetWord[i], false);
}

// Rendering initial guessingWord
function render() {
    for (i = 0; i < blanket.lettersArray.length; i++) {
        guessingWord[i] = "_"

    }
}
render();

// Generating the placeholder
function placeholder() {
    for (i = 0; i < blanket.lettersArray.length; i++) {
        if (blanket.lettersArray[i].isLetterGuessed === true) {
            guessingWord[i] = (blanket.lettersArray[i].targetLetter)
            // guessingWord[i] = userGuess.letter
        }
        // else {
        //     // guessingWord.push("_")
        //     guessingWord[i] = "_"
        // }
    }
    // console.log("Guessing Word: " + guessingWord.join(" "))
}
// placeholder()



function inquirerLetterGuess() {
    inquirer.prompt([
        {
            type: "input",
            name: "letter",
            message: "What is your letter selection?"
        }
    ]).then(function (userGuess) {
        console.log(userGuess.letter);
        for (i = 0; i < blanket.targetWord.length; i++) {
            blanket.lettersArray[i].boolean(userGuess.letter);
        }
        placeholder()
        // console.log(guessingWord);
        // if (guessingWord.join(" ") === blanket.targetWord) {
        //     return console.log("You win!");
        // }
        // else {
        //     for (var i = 0; i < blanket.targetWord.length; i++) {
        //         var currentLetter = blanket.targetWord[i]
        //         if (userGuess.letter === currentLetter) {
        //             guessingWord[i] = userGuess.letter;
        //         }

        // }
        console.log("Guessing Word: " + guessingWord.join(" "))
        // guessingWord = [];
        inquirerLetterGuess()
    })
}
inquirerLetterGuess()

