// Assignment Code
var generateBtn = document.querySelector("#generate");

alphabet = "abcdefghijklmnopqrstuvwxyz"

number = "0123456789"

specialCharacters = "!@#$$$%%^&*()"

var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var alphaUpper = alphabet.toUpperCase().split("")
var characterSplit = specialCharacters.split("")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Prompt, Conditional Character, Condit