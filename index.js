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

// Generating the placeholder
function placeholder() {
    for (i = 0; i < blanket.lettersArray.length; i++) {
        if (blanket.lettersArray[i].isLetterGuessed === true) {
            guessingWord.push(blanket.lettersArray[i].targetLetter)
        }
        else {
            guessingWord.push("_")
        }
    }
    console.log("Guessing Word: " + guessingWord.join(" "))
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
            // console.log(blanket.lettersArray[i].isLetterGuessed);
        }
        // console.log(blanket.lettersArray)
        placeholder()
    })
}
inquirerLetterGuess()

