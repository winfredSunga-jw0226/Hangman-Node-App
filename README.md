# Hang Man Node Application 

This is a word guessing game application built in Node.js. The goal is to guess the word one letter at a time. The theme for this game is Greek Mythology characters, so this will test your familiarity with Greek Mythology. All interactions for this game is done via the command line interface.

Here are the rules for this game : 
* the round starts by displaying a word that is hidden - each letter is replaced by an underscore
* you will be prompted to guess the word one letter at a time by keying in letters of the alphabet using your keyboard
* you are only allowed to key in the letters of the alphabet. You will be prompted in the event that a wrong key was provided
* per round you are given 10 total guesses to solve the word
* guessing a wrong letter decreases your number of guesses left by 1
* the game will not allow you to use the same letter twice, so it will display an error but it will not decrease your number of guesses left
* guessing the correct letter shows the letter in it's correct position, replacing the undescore carracter with the actual letter you have chosen
* if you guessed the word successfully, you will move on to the next round and will be given a new word to guess
* if your guesses left goes to 0 and still haven't solved the word, you will be given a choice to continue playing or end the game
* there will be a total of 20 rounds in this game. The game will end when you run out of words to guess - if you get this far :)

### How To Start
1. Open the terminal (on a Mac) or command line (on a PC)
2. Navigate to the directory where you cloned the repo
3. Simply type in this command --> `node hangman.js` then press the enter key
4. The series of prompts will guide you throughout the game
5. Grab your favorite drink and enjoy! 

### Technical Info
This game was built using - 
* Javascript
* Node.js 
* [Inquirer package] (https://www.npmjs.com/package/inquirer)
* [Alphabet package] (https://www.npmjs.com/package/alphabet)

## Good Luck and enjoy the game!!!

