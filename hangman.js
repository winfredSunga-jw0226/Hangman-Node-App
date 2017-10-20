//require the game constructor from game.js
var Game = require("./game.js");
var inquirer = require("inquirer");

//create an array of words for guessing - with a theme (greek mythology characters)
var wordsArray = ["hercules", "poseidon", "minotaur","medusa","aphrodite", "hephaestus", "prometheus", "perseus", "cronus","nemesis","artemis", "apollo", "zeus", "hades", "hera","uranus","phoebe","kraken","pegasus","titans"];
// var numberOfGuesses = 10;

console.log("Let's Play Hangman!!!\n");

var game = new Game(wordsArray, numberOfGuesses);

//create a new property that will keep all the used letters for tracking
game.usedLetters = [];

//log the word that needs to be guessed
console.log(game.guessThisWord);

//show the console the "invisible" word 
//var invisibleWord = new Word(game.guessThisWord);
console.log(game.turnWordIntoInvisible()); 

//console.log(invisibleWord.invisibleWord);

//unhide the word, one letter at a time

//prompt the user to guess a letter


function playGame() {
  game.displayWordToConsole();
  inquirer.prompt([
  {
    type : "input",
    name : "letter",
    message : "Guess a letter!"

  }
  ]).then(function(response) {
    console.log("You entered : " + reponse.letter);

    //check if the letter has not already been used
    if (guessedLetters.indexOf(respose.letter) !== - 1) {
      //push the letter into the guessed letters array
      game.guessedLetters.push(letter);
    } 
    //else check if the 
    else {

    }
    

  });
}


//function to display the letter if it belongs to the word
function displayLetter(letter) {

}