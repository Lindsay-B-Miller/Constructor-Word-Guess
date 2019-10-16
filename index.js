var inquirer = require("inquirer");

function inquirerLetterGuess() {
    inquirer.prompt([
        {
            type: "input",
            name: "letter",
            message: "What is your letter selection?"
        }
    ]).then(function (userGuess) {
        console.log(userGuess.letter);
    })
}
inquirerLetterGuess()

