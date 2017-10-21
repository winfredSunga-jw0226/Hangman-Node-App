//require the game constructor from game.js
var Game = require("./game.js");
var inquirer = require("inquirer");
var alphabet = require("alphabet");

//create an array of words for guessing - with a theme (greek mythology characters)
var wordsArray = ["hercules", "poseidon", "minotaur","medusa","aphrodite", "hephaestus", "prometheus", "perseus", "cronus","nemesis","artemis", "apollo", "zeus", "hades", "hera","uranus","phoebe","kraken","pegasus","titans"];
var numberOfGuesses = 10;

console.log("Let's Play Hangman!!!\n");
console.log("Theme : Greek Mythology Characters\n");

var game = new Game(wordsArray, numberOfGuesses);

//get random word
game.getRandomWord();

//at the start of game, initialize the input to be empty string
var input = " ";

//function to run the game
function playGame(callback) {
  //if there is a callback function, get a new random word
  if(callback) {
    //get a new random word
    game.getRandomWord();

    //reset guesses remainining
    game.guessesRemaining = numberOfGuesses;

    //reset input
    input = " ";
  }
 
  //display the word to be guessed - first time it will be all "_" but as we progress they will be replaced with the actual letter
  //console.log("current word : " + game.currentWord + "\n");
  console.log(game.getDisplayWord(input) + "\n");
  //console.log("Round # : " + game.roundNumber);
  //console.log("Words Count : " + game.words.length);
  //console.log(game.guessedLetters);
  //console.log(game.words);
  //console.log("total rounds : " + game.totalRounds);

  //add the letter into the guessed letters array
  if (input !== " ") {
    game.guessedLetters.push(input);
  }
  
  inquirer.prompt([
  {
    type : "input",
    name : "letter",
    message : "Guess a letter!",
    validate : function (value) {
      if (alphabet.join("").indexOf(value) !== - 1) {
        return true;
      } else {
        return "Please enter a letter!";
      }
    }
  }
  ]).then(function(response) {
      //console.log(round.guessedLetters);

      input = response.letter;

      //update what the display word would be
      game.getDisplayWord(input);

      // console.log("You entered : " + input);

      //if player entered an already used letter
      if (game.guessedLetters.indexOf(input) !==  -1) {
        //display an error or warning
        console.log("You already used " + input + ". Pick another letter!");
      
        //prompt the user for next input
        playGame();

      } 
      // else if the letter doesn't belong to the word
      else if (game.currentWord.indexOf(input) === -1) {
        //decrement guesses left 
        game.guessesRemaining--;

        console.log("INCORRECT!!!\nGuesses Left : " + game.guessesRemaining);
        
        //if guesses left > 0
        if (game.guessesRemaining > 0) {
          //prompt the user for next input
          playGame();
        } 
        //else prompt user if they want to end game
        else {
          promptEndGame(game.currentWord);
        }
      } 
      //else if the letter belongs to word AND there are more letters left to guess
      else if (game.currentWord.indexOf(input) !== -1 && game.displayWord.indexOf("_") !== -1) {
       //prompt the user for next input 
       playGame();
      } 
      //else if the letter belongs to word and there are no more letters left to guess AND it's not the final round 
      else if (game.currentWord.indexOf(input) !== -1 && game.displayWord.indexOf("_") === -1 && game.roundNumber < game.totalRounds) {
        //display you got it right, next word!!!
        console.log("You got it right!!! Next word!");

        //recurse the function with a callback
        playGame(game.getRandomWord);
      }  
      //else if the letter belongs to word and there are no more letters left to guess AND it's  the final round 
      else if (game.currentWord.indexOf(input) !== -1 && game.displayWord.indexOf("_") === -1 && game.roundNumber === game.totalRounds) {
        //display you got it right, next word!!!
        console.log("You got it right!!! You completed the game. GAME OVER!!!");
        //end game
        process.exit();
      }  
  });
}

//function to prompt user if they want to end game or not
function promptEndGame(currentWord) {
  inquirer.prompt([
  {
    name : "endGame",
    type : "list",
    message : 'The correct word is "' + currentWord + '". You ran out of guesses. Do you wish to end the game?',
    choices : ["Yes", "No"]
  }
  ]).then(function(response) {
    
    //if the user responsed yes to the prompt
    if (response.endGame.toLowerCase() === "yes") {
      //end the game
      process.exit();
    } else {
      //keep prompting for the next letter
      playGame(game.getRandomWord);
    }
  });
}

//this starts the game
playGame();
