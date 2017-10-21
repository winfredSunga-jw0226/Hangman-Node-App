//require the Letter construction from letter.js
var Letter = require("./letter.js");

//create a constructor called Word
var Word = function(word, input) {
  //create a word property
  this.wordValue = word.toLowerCase();

  //method to get an array of letter objects
  this.getArrayOfLetterObjects = function() {
    //split the word into an array of letters
    var letters = this.wordValue.split("");

    //placeholder for letter objects that will be pushed into an array
    var letterObjects = [];

    //iterate through each letter in the letters array 
    letters.forEach(function(element, index) {
      //create an instance of Letter constructor for each letter
      var letter = new Letter(element, index);
      //push the new letter object into letterObjects array 
      letterObjects.push(letter);
    });
    //return the letterbjects array
    return letterObjects;
  };

  //property which persists the array of letter objects
  this.letterObjectArrays = this.getArrayOfLetterObjects();

  //function to get the display word
  this.getDisplayWord = function(input) {
    // if (input === " ") {
    //   return;
    // }

    //placeholder for the word, an array
    var word = [];

    //iterate through each letter objects in the array
    for (var key in this.letterObjectArrays) {
      //letter object variable will hold the object
      var letterObject = this.letterObjectArrays[key];

      //if the output of the check method returns true
      if (letterObject.checkAgainstInput(input)) {
        //push the actual letter into the word array
        word.push(letterObject.displayCharacter);
      } //else push the '_'
      else {
        word.push(letterObject.displayCharacter);
      }
    }
    //return the word array
    return word.join(" ");
  };

  //persistence of the display word
  //this.displayWord = this.getDisplayWord();

};

module.exports = Word;

