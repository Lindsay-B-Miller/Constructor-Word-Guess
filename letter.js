var inquirer = require("inquirer");

function Letter(targetLetter, isLetterGuessed) {
    this.targetLetter = targetLetter;
    this.isLetterGuessed = isLetterGuessed;

    this.boolean = function () {
        if (userGuess === this.targetLetter) {
            this.isLetterGuessed = true;
        }
        else {
            this.isLetterGuessed = false;
        }
    }

    this.showValue = function () {
        if (isLetterGuessed === true) {
            return this.targetLetter;
        }
        else {
            return "_";
        }
    }
}