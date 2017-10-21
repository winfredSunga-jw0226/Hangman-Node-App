//require the Word constructor from word.js
var Word = require("./word.js");

//create a constructor named Game
var Round = function(words, number) {
  
  var word;

  //property for an array of words
  this.words = words;

  //property for total # of rounds
  this.totalRounds = words.length;

  //property for the round
  this.roundNumber = 0;

  //property to set the number of guesses per round
  this.guessesRemaining = number;

  //property to hold guessed letters
  this.guessedLetters = [];

  //function to increment round
  this.incrementRound = function() {
    this.roundNumber ++;
  };

  //remove a word from the words array
  this.removeWord = function(index) {

    //remove the word which is found in the index provided
    this.words.splice(index, 1);
  };

  //assign a word to be guessed
  this.currentWord = "";//this.getRandomWord();

  //method to pick a random word
  this.getRandomWord = function() {
    //get the word's length
    var length = this.words.length;

    //get a random index
    var randomIndex = Math.floor(Math.random() * length);

    //remove the word from the words array
    this.removeWord(randomIndex);

    //create a new instance of Word constructor
    word = new Word(this.words[randomIndex]);

    //assign the word to be guessed
    this.currentWord = this.words[randomIndex];

    //return the random word picked
    return this.words[randomIndex];
  };

  //persisted display word
  this.displayWord = "";

  //method that gets the display word
  this.getDisplayWord = function(input) {
    this.displayWord = word.getDisplayWord(input);

    return this.displayWord;
  }

}

module.exports = Round;









