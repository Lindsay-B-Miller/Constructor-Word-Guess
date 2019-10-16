var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        name: "letter",
        message: "What letter would you like to select?"
    }
]).then(function (answers) {
    console.log(answers.letter);

    function Letter(letter) {
        this.letter = letter;
        console.log("Letter: " + this.letter)
        if (answers.letter === this.letter) {
            return console.log("It worked! The letter you chose was: " + this.letter)
        }
        else {
            return console.log("_")
        }
    }

    var newLetter = new Letter("a")

})


