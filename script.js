// Assignment Code

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()1234567890"
var alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz"
var digits = "1234567890"
var specialCharacters = "!@#$%^&*()"

let customArray = "";

// Write password to the #password input
function writePassword() {
  document.querySelector("#password").value = "";
  generator(customArray);
  
}

// 
function generator(userPasswordAray) {
  
  // Has user input their desired password length!
  // This loop prevents them from inputing things outside parameters like: "chicken, 1324235, or 2"
  let passwordLength = parseInt(
    prompt("How many characters would you like your Password to be?")
    );
    
    while (isNaN(passwordLength) === true || passwordLength > 128 || passwordLength < 8) {
      
      if (isNaN(passwordLength) === true) {
        
        alert("You did not input a number between 8 and 128")
        passwordLength = prompt("How many characters would you like your Password to be?")
        
      }
      
      else if (passwordLength > 128) {
        
        alert("Your password is too long! Your password must be between 8 and 128 characters")
        
        passwordLength = prompt("How many characters would you like your Password to be?")
        
      }
      
      else if (passwordLength < 8) {
        
        alert("Your password is too short! Your password must be between 8 and 128 characters")
        
        passwordLength = prompt("How many characters would you like your Password to be?")
        
      }

    
    }
    
    // these confirms ask WHICH TYPE of characters they want in their password
    let lowerSelect = confirm("Would you lowercase letters in your Password? OK for YES, CANCEL for NO")
    
    if (lowerSelect === true) {
      userPasswordAray += alphabetLowerCase
    }
    
    let upperSelect = confirm("Would you like uppercase letters in your Password? OK for YES, CANCEL for NO")
    
    
    if (upperSelect === true) {
      userPasswordAray += alphabetUpperCase
    }
    
    let specialSelect = confirm("Would you like special characters in your Password?  OK for YES, CANCEL for NO")
    
    if (specialSelect === true) {
      userPasswordAray += specialCharacters
    }
    
    let numberSelect = confirm("Would you like numbers in your Password? OK for YES, CANCEL for NO")
    
    if (numberSelect === true) {
      userPasswordAray += digits
    }
    
    let password = "";
    
    // Selects random characters from the array
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * userPasswordAray.length);
      password += userPasswordAray[randomIndex];
    }
    
    passwordText.value = password;
    
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword)
  
  
  
  