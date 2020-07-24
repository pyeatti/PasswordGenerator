

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()1234567890"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var numberChar = "1234567890"
var specialChar = "!@#$%^&*()"
let upperSplit = upperChar.split("")
let lowerSplit = lowerChar.split("");
let specialSplit = specialChar.split("");
let numberSplit = numberChar.split("");
let allSplit = allChar.split("");

let userArray = [];

// let userArray = "";

let everyCharacterSplit = numberSplit + lowerSplit + specialSplit + upperSplit
// let passwordLength = prompt("How many characters should your password be?")

// Write password to the #password input

// Add event listener to generate button




// function writePassword() {
//     generator(allChar);
// }
  
// function generator(characterArray) {
    
//     let passwordLength = parseInt(
//         prompt("How many characters should your password be?")
//     );
    
//     for (let i = 0; i < passwordLength; i++) {
//       let randomIndex = Math.floor(Math.random() * characterArray.length);
//       password = characterArray[randomIndex];
//       passwordText.value += password;
//     }
//   }

function writePassword() {
    
    // let userArray = [];
    document.querySelector("#password").value = "";
    generator(userArray);
  }
  
  
  function generator(characterArray) {
    
      //$("#password").val("");
      

      let passwordLength = parseInt(
      prompt("How many characters should your password be?")
    );
    
    

    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * characterArray.length);
      password = characterArray[randomIndex];
      passwordText.value += password;
    }

    
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


        var lowerSelect = confirm("Would you lowercase letters in your Password? OK for YES, CANCEL for NO")

        

        var upperSelect = confirm("Would you like uppercase letters in your Password? OK for YES, CANCEL for NO")



        var specialSelect = confirm("Would you like special characters in your Password?  OK for YES, CANCEL for NO")



        var numberSelect = confirm("Would you like numbers in your Password? OK for YES, CANCEL for NO")

    
       
      if (lowerSelect === true) {
          userArray.push.apply(lowerSplit)
        //   console.log(userArray)
      }
      
      if (upperSelect === true) {
          userArray.push.apply(upperSplit)
        //   console.log(userArray)
      }
      
      if (specialSelect === true) {
          userArray.push.apply(specialSplit)
        //   console.log(userArray)
      }
      
      if (numberSelect === true) {
          userArray.push.apply(numberSplit)
        //   console.log(userArray)
      }
      
      
      

  }

 
 generateBtn.addEventListener("click", writePassword)
  
    
    
