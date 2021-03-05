// Assignment code here
function writePassword(){
  var passwordLength = window.prompt('How long should your password be?');
  console.log (passwordLength);
  if (passwordLength < 8 || passwordLength > 128){     
    window.alert ('Please enter a value from 8-128');
    return writePassword();
  } 

  var upperCaseConfirm = window.confirm('Does your password require Upper Case letters?');
  console.log (upperCaseConfirm);
  var numberConfirm = window.confirm('Does your password require numbers?');
  console.log (numberConfirm);
  var symbolConfirm = window.confirm('Does your password require symbols?');
  console.log (symbolConfirm);
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var symbols = ['!', '?', '@', '#', '$', '%', '^', '&', '*'];


var randomUpper = upperCharacters[Math.floor(Math.random()*upperCharacters.length)];
var randomLower = lowerCharacters[Math.floor(Math.random()*lowerCharacters.length)];
var randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
var randomSymbol = symbols[Math.floor(Math.random()*symbols.length)];

console.log (randomLower)
console.log (randomUpper)
console.log (randomNumber)
console.log (randomSymbol)