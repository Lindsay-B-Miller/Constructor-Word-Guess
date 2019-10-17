var Letter = require("./letter");

// Constructor function for creating word
var Word = function (targetWord) {
    this.targetWord = targetWord;
    // this.letters includes both the letter and whether or not it has been guessed
    this.lettersArray = [];
    // this.letters = [];

    // This method that creates a CastMember object from the constructor function we required and pushes it to the `this.letters` array
    this.addLetter = function (targetLetter) {
        this.lettersArray.push(new Letter(targetLetter));
        // console.log("Target Letter: " + this.lettersArray[0].targetLetter);
        // this.letters.push(this.lettersArray[0].targetLetter);

    };
    // console.log("Letters: " + JSON.stringify(this.letters));
};

module.exports = Word;