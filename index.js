var inquirer = require("inquirer");
var Word = require("./word");

// Creating a new Word with the constructor and storing it in blanket
var blanket = new Word("blanket");

// Logging out some initial information about blanket object
console.log("Word: " + blanket.targetWord);

console.log("Length: " + blanket.targetWord.length)
for (i = 0; i < blanket.targetWord.length; i++) {
    console.log("SELECTED LETTER: " + (blanket.targetWord[i].split()))
}

blanket.addLetter("b", false);
console.log("First letter: " + JSON.stringify(blanket.letters, null, 2) + "\n");

// function inquirerLetterGuess() {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "letter",
//             message: "What is your letter selection?"
//         }
//     ]).then(function (userGuess) {
//         console.log(userGuess.letter);

//     })
// }
// inquirerLetterGuess()

