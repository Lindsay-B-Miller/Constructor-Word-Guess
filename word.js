var Letter = require("./letter");

// Constructor function for creating word
var Word = function (targetWord) {
    this.targetWord = targetWord;
    // this.letters includes both the letter and whether or not it has been guessed
    this.lettersArray = [];

    // This method  creates a Letter object from the constructor function we required and pushes it to the `this.letters` array
    this.addLetter = function (targetLetter) {
        this.lettersArray.push(new Letter(targetLetter));
    };
};

module.exports = Word;