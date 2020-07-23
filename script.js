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


passwordLength = prompt("How many characters would you like your Password to be?")



while (isNaN(passwordLength) === true || passwordLength > 128 || passwordLength < 8) {

  if (isNaN(passwordLength) === true) {
  
    alert("You did not input a number")
    passwordLength = prompt("How many characters would you like your Password to be?")
  
  }

  
  else if (passwordLength > 128) {
      alert("You password is too long! Your password must be between 8 and 128 characters")
      
      passwordLength = prompt("How many characters would you like your Password to be?")
  
  }

  else if (passwordLength < 8) {

    alert("Your password is too short! Your password must be between 8 and 128 characters")
      
      passwordLength = prompt("How many characters would you like your Password to be?")

  }
}





// alert(passwordLength)


lowercase = confirm("Would you lowercase letters in your Password? OK for YES, CANCEL for NO")

// alert(lowercase)

uppercase = confirm("Would you like uppercase letters in your Password? OK for YES, CANCEL for NO")

// alert(uppercase)

specChar = confirm("Would you like special characters in your Password?  OK for YES, CANCEL for NO")

// alert(specChar)

numbers = confirm("Would you like numbers in your Password? OK for YES, CANCEL for NO")

// alert(numbers)



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


writePassword(passwordLength, alphabet, specialCharacters, alphaUpper, number);



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Prompt, Conditional Character, Conditz