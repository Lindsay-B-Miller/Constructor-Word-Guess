var Letter = require("./letter");

// Constructor function for creating word
var Word = function (targetWord) {
    this.targetWord = targetWord;
    this.letters = [];

    // This method that creates a CastMember object from the constructor function we required and pushes it to the `this.letters` array
    this.addLetter = function (targetLetter, isLetterGuessed) {
        this.letters.push(new Letter(targetLetter, isLetterGuessed));
    };
};

module.exports = Word;