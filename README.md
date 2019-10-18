# Constructor-Word-Guess

## About the Project
In this application, the user plays a word guess game within the terminal using the node package. The application relies on two constructors, the Letter constructor and the Word constructor, to construct the word the user is guessing within the terminal. "Letter" is comprised of a boolean function that toggles the variable, "isLetterGuessed" between true and false, depending on whether the user has returned that value within an inquirer prompt over the course of the game. "Word" takes in a randomly generated target word from an array of possible choices, and then runs the addLetters function to push all letters and their isLetterGuessed value to the array lettersArray. As the user changes these values from "false" to "true", the placeholder function changes the underscores to letters within the guessingWord variable. Once all letters have been toggled to "true", and guessingWord is comprised entirely of letters, the app logs that game as a "win" and restarts with a new randomly generated word. If the user guesses incorrectly 10 times over the course of one game, the app logs the game as a loss and begins anew.

## Getting Started
To set up your project locally, follow the steps below.

### Prerequisites 
1. Initialize `package.json`: `npm init -y`
2. Install inquirer: `npm install inquirer`

## Usage
1. After running node index.js, inquirer prompts the user to guess a letter. 
![Inquirer](./images/Inquirer.jpg?raw=true)

2. When the letter is selected, the console informs the user whether they entered a correct or incorrect guess, based on the target word. The app then outputs the word in underscores, and if the user guessed a correct letter, replaces the underscores with the user's guess where that letter is correct. 
![First Guess](./images/firstGuess.jpg?raw=true)

3. Inquirer then prompts the user for their next guess. If the user's guess is incorrect, the app will log "INCORRECT" in thee terrminal, and inform the user how many guesses they have remaining (counting down from 10)
![Incorrect Guess](./images/incorrectGuess.jpg?raw=true)

4. If the user guesses incorrectly 10 times before the word is completed, the app will log "You lose! Play again:", and display the number of wins and losses, incrementing losses by 1. The app will automatically restart with a new randomly generated word from the Words array. 
![Lose](./images/Lose.jpg?raw=true)

5. If the user completes the word within the 10 allotted guesses, the console will display "You win! Correct word was: (correct word). Play again:". The app will display the number of wins and losses, incrementing wins by 1. The app will automatically restart with a new randomly generated word from the Words array.
![Win](./images/win.jpg?raw=true)

## Contact
Lindsay B Miller created this project with instructions from Trilogy Education Services.

Project Link: https://github.com/Lindsay-B-Miller/Constructor-Word-Guess

Deployed Link: https://lindsay-b-miller.github.io/Constructor-Word-Guess/

