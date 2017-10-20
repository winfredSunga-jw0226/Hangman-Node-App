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

  //function to mark the letter as guessed - update boolean variable to true and the display character to the actual letter
  this.markLetterAsGuessed = function(input) {
    if (this.letter === letter) {
      this.isGuessed = true;
      this.displayCharacter = this.letter;
    }
  };
 };

 module.exports = Letter;


 var Letter = function(str) {
  if(str !== " ") {
    this.type = "letter";
    this.value = str;
    this.baseValue = str.toLowerCase();
    this.solved = false;
    this.display = "_"
    this.show = function(check) {
      if(this.baseValue === check) {
        this.solved = true;
        this.display = this.value;
        return true;
      }
      else if (!this.solved) {
        this.display = "_";
      }
    }
  }
  else {
    this.type = "space";
    this.value = str;
    this.solved = true;
    this.display = " ";
    this.show = function(check) {
      //nothing happens, this just needs to exist
    }
  }
}

module.exports = Letter;