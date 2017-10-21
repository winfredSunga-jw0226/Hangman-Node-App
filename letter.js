//create a constructor called Letter
var Letter = function(letter, index) {
  //create a letter property
  this.letterValue = letter.toLowerCase();

  //show the character to display, "_" if not yet guessed and the actual letter if guessed
  this.displayCharacter = "_";

  //state the index of the letter within the word
  this.letterIndex = index;

  //boolean variable to mark whether the letter has been guessed or not. Initialize to false
  this.isGuessed = false;

  //function to check if the letter is guessed, returns boolean and is evaluated by the Word constructor
  this.checkAgainstInput = function(input) {
    if (this.letterValue === input.toLowerCase()) {
      this.isGuessed = true;
      this.displayCharacter = this.letterValue;
      return true;
    } else {
      return false;
    }
  };
 };

 module.exports = Letter;
