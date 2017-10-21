//require the game constructor from game.js
var Round = require("./round.js");
var inquirer = require("inquirer");
var alphabet = require("alphabet");

//create an array of words for guessing - with a theme (greek mythology characters)
var wordsArray = ["hercules", "poseidon", "minotaur","medusa","aphrodite", "hephaestus", "prometheus", "perseus", "cronus","nemesis","artemis", "apollo", "zeus", "hades", "hera","uranus","phoebe","kraken","pegasus","titans"];
var numberOfGuesses = 10;

console.log("Let's Play Hangman!!!\n");

var round = new Round(wordsArray, numberOfGuesses);

//increment the round #
//round.incrementRound();

//get random word
round.getRandomWord();

//at the start of game, initialize the input to be empty string
var input = " ";

function playRound(callback) {
  if(callback) {
    round.getRandomWord();
  }

  //display the word to be guessed - first time it will be all "_" but as we progress they will be replaced with the actual letter
  console.log(round.currentWord + "\n");
  console.log(round.getDisplayWord(input));
  console.log("Round # : " + round.roundNumber);
  console.log("Words Count : " + round.words.length);
  console.log(round.guessedLetters);

  //add the letter into the guessed letters array
  if (input !== " ") {
    round.guessedLetters.push(input);
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
      round.getDisplayWord(input);

      // console.log("You entered : " + input);

      //if player entered an already used letter
      if (round.guessedLetters.indexOf(input) !==  -1) {
        //display an error or warning
        console.log("You already used " + input + ". Pick another letter!");
      
        //prompt the user for next input
        playRound();

      } 
      // else if the letter doesn't belong to the word
      else if (round.currentWord.indexOf(input) === -1) {
        //decrement guesses left 
        round.guessesRemaining--;

        console.log("INCORRECT!!!\nGuesses Left : " + round.guessesRemaining);
        
        //if guesses left > 0
        if (round.guessesRemaining > 0) {
          //prompt the user for next input
          playRound();
        } 
        //else prompt user if they want to end game
        else {
          promptEndGame();
        }
      } 
      //else if the letter belongs to word AND there are more letters left to guess
      else if (round.currentWord.indexOf(input) !== -1 && round.displayWord.indexOf("_") !== -1) {
       //prompt the user for next input 
       playRound();
      } 
      //else if the letter belongs to word and there are no more letters left to guess AND it's not the final round 
      else if (round.currentWord.indexOf(input) !== -1 && round.displayWord.indexOf("_") === -1 && round.roundNumber < round.totalRounds) {
        //display you got it right, next word!!!
        console.log("You got it right!!! Next word!");

        //reset input 
        input = " ";

        //increment round number
        //round.incrementRound();

        // //remove word from word bank so it won't be picked again
        // round.removeWord();

        //pick a new random word
        //round.getRandomWord();

        //prompt the user for next input 
        playRound(round.getRandomWord);
      }  
      //else if the letter belongs to word and there are no more letters left to guess AND it's  the final round 
      else if (round.currentWord.indexOf(input) !== -1 && round.displayWord.indexOf("_") === -1 && round.roundNumber === round.totalRounds) {
        //display you got it right, next word!!!
        console.log("You got it right!!! You completed the game. GAME OVER!!!");
        //end game
        process.exit();
      }  
  });
}

function promptEndGame() {
  inquirer.prompt([
  {
    name : "endGame",
    type : "list",
    message : "Do you wish to end the game?",
    choices : ["Yes", "No"]
  }
  ]).then(function(response) {
    
    //if the user responsed yes to the prompt
    if (response.endGame.toLowerCase() === "yes") {
      //end the game
      process.exit();
    } else {
      //keep prompting for the next letter
      playGame(ound.getRandomWord);
    }
  });
}

playRound();
