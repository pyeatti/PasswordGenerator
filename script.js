// Assignment Code
var generateBtn = document.querySelector("#generate");

alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz"
let alphabetLowerSplit = alphabetLowerCase.split("")
alphabetLowerSplit = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let alaphbetUpperSplit = alphabetLowerCase.toUpperCase().split("")
alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

specialCharacters = "!@#$%^&*()"
let specialCharacterSplit = specialCharacters.split("")
specialCharacters = ["!", "@", "#", "$", "$", "$", "%", "%", "^", "&", "*", "(", ")"]

var numSplit = number.toString(10).split("")

number = "1234567890"
let numberSplit = number.split("")
numberSplit = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

let allCharacters


let password = ""

// let passwordLength = prompt("How many characters would you like your Password to be?")

for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * alphabetLowerCase.length);
    password = alphabetLowerCase[randomIndex]
    console.log(password)
    
}




let passwordLength = prompt("How many characters would you like your Password to be?")















// passwordLength = prompt("How many characters would you like your Password to be?")

// for (let index = 0; index < userInput; index++) {
    
//   // returns random number between 0-1
//   let randomTinyNumber = Math.random()

//   // returns random number between 0-25
//   let randomAlphabetIndex = randomTinyNumber*alphabet.length

//   let randomLetter = alphabet[randomAlphabetIndex]
//   console.log(randomLetter)
// }



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








confirm("Would you lowercase letters in your Password? OK for YES, CANCEL for NO")



confirm("Would you like uppercase letters in your Password? OK for YES, CANCEL for NO")



confirm("Would you like special characters in your Password?  OK for YES, CANCEL for NO")



confirm("Would you like numbers in your Password? OK for YES, CANCEL for NO")





// Write password to the #password input
function writePassword() {

  prompt("How many characters would you like your Password to be?")
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}


// writePassword(passwordLength, alphabet, specialCharacters, alphaUpper, number);



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Prompt, Conditional Character, Conditz