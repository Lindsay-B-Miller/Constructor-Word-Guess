var inquirer = require("inquirer");

// Constructor for creating letter
var Letter = function (targetLetter, isLetterGuessed, ) {
    this.targetLetter = targetLetter;
    this.isLetterGuessed = isLetterGuessed;


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

    // this.showValue = function () {
    //     if (isLetterGuessed === true) {
    //         return console.log(this.targetLetter);
    //     }
    //     else {
    //         return console.log("_");
    //     }

    // }
}

// Exporting Letter constructor
module.exports = Letter;