// Assignment Code
var generateBtn = document.querySelector("#generate");

// alphabet = "abcdefghijklmnopqrstuvwxyz"
// var alphaSplit = alphabet.split("")
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// var characterSplit = specialCharacters.split("")
specialCharacters = ["!", "@", "#", "$", "$", "$", "%", "%", "^", "&", "*", "(", ")"]


// var alphaUpperSplit = alphabet.toUpperCase().split("")
alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// var numSplit = number.toString(10).split("")
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Prompt, Conditional Character, Condit