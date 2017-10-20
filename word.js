//require the Letter construction from letter.js
var Letter = require("./letter.js");

//create a constructor called Word
var Word = function(word) {
  //create a word property
  this.word = word;

  this.getArrayOfLetterObjects = function() {
    var letters = this.word.split("");

    var letterObjects = [];

   letters.forEach(function(element, index) {
      var letter = new Letter(element, index);
      letterObjects.push(letter);
    });

    return letterObjects;
  };

  this.letterObjectArrays = this.getArrayOfLetterObjects();

  this.getDisplayWord = function() {
    var letters = [];

    for (var key in this.letterObjectArrays) {
      letters.push(this.letterObjectArrays[key].displayCharacter)
    }

    return letters
  };

  this.displayWord = this.getDisplayWord();



  //create a method which will show the invisible word
  this.initializeWord = function() {
    //split the word(s) into an array of letters
    var lettersArray = this.word.split("");

    //create an empty array for the display letters
    var displayLettersArray = [];

    for (var i = 0; i < lettersArray.length; i++) {
      var letter = new Letter(lettersArray[i], i);

      displayLettersArray.push(letter.displayCharacter);
    }
    return displayLettersArray.join(" ");
  };

  /*

  //create a function which will update the display word
  this.displayUpdatedWord = function() {
    var displayLettersArray = [];

    for (var i = 0; i < lettersArray.length; i++) {
      if (letter.letter === lettersArray[i]) {
        displayLettersArray.push[letter.displayCharacter];
      }
    }
    return displayLettersArray;
  };

  //create a property which will hold how the word will be displayed (initially) in the console
  this.displayInvisibleWord = this.displayInvisibleWord();

  //create a property that has the updated display word when a letter is guessed correctly
  this.displayUpdatedWord = this.displayUpdatedWord();
*/

};
module.exports = Word;

