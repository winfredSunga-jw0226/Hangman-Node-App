//require the Word constructor from word.js
var Word = require("./word.js");

//create a constructor named Game
var Game = function(words, number) {
  
  //property for an array of words
  this.words = words;

  //property for total # of rounds
  this.totalRounds = words.length;

  //property for the round
  this.currentRound = 0;

  //property to set the number of guesses per round
  this.guessesRemaining = number;

  //function to increment round
  this.incrementRound = function() {
    this.currentRound += 1;
  };

  //remove a word from the words array
  this.removeWord = function(index) {

    //remove the word which is found in the index provided
    this.words.splice(index, 1);
  };

  //method to pick a random word
  this.getRandomWord = function() {
    //get the word's length
    var length = this.words.length;

    //get a random index
    var randomIndex = Math.floor(Math.random() * length);

    //remove the word from the words array
    this.removeWord(randomIndex);

    //return the random word picked
    return this.words[randomIndex];
  };

  //assign a word to be guessed
  this.guessThisWord = this.getRandomWord();

  //method that assigns the invisible word to be displayed in the console
  this.displayWordToConsole = function() {
    var word = new Word(this.guessThisWord);

    return word.displayInvisibleWord;
  }

}

var word = new Word("medusa");

console.log(word.letterObjectArrays);
console.log(word.word);
console.log(word.displayWord);


module.exports = Game;









