var inquirer = require("inquirer");

// Constructor for creating letter
var Letter = function (targetLetter) {
    this.targetLetter = targetLetter;
    this.isLetterGuessed = false;


    this.boolean = function (userGuess) {
        if (userGuess === this.targetLetter) {
            this.isLetterGuessed = true;
            // console.log(this.isLetterGuessed)
        }
        else {
            this.isLetterGuessed = false;
            // console.log(isLetterGuessed);
        }
    }
}

// Exporting Letter constructor
module.exports = Letter;