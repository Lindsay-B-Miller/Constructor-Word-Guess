var inquirer = require("inquirer");

// Constructor for creating letter
var Letter = function (targetLetter, isLetterGuessed) {
    this.targetLetter = targetLetter;
    this.isLetterGuessed = isLetterGuessed;

    this.boolean = function () {
        if (userGuess.letter === this.targetLetter) {
            this.isLetterGuessed = true;
        }
        else {
            this.isLetterGuessed = false;
        }
        console.log(isLetterGuessed);
    }

    this.showValue = function () {
        if (isLetterGuessed === true) {
            return console.log(this.targetLetter);
        }
        else {
            return console.log("_");
        }

    }
}

// Exporting Letter constructor
module.exports = Letter;