// Assignment code here

function generatePassword() {
  var passwordLength = window.prompt("How long should your password be?");
  while (passwordLength < 8 || passwordLength > 128)
    passwordLength = window.prompt("Please enter a value from 8-128");

  var lowerCaseConfirm = window.confirm(
    "Does your password require Lower Case Letters?"
  );

  var upperCaseConfirm = window.confirm(
    "Does your password require Upper Case letters?"
  );

  var numberConfirm = window.confirm("Does your password require numbers?");

  var symbolConfirm = window.confirm("Does your password require symbols?");

  if (
    lowerCaseConfirm === false &&
    upperCaseConfirm === false &&
    numberConfirm === false &&
    symbolConfirm === false
  ) {
        window.alert(
      "Choose at least one type of character set for your password!!!"
    );
    return generatePassword();
  }
 

  var passwordCharacters = []
    
  if (symbolConfirm) {
    passwordCharacters = passwordCharacters.concat(symbols)
  }

  if (numberConfirm) {
    passwordCharacters = passwordCharacters.concat(numbers)
  }
    
  if (lowerCaseConfirm) {
    passwordCharacters = passwordCharacters.concat(lowerCharacters)
  }

  if (upperCaseConfirm) {
    passwordCharacters = passwordCharacters.concat(upperCharacters)
  }

  console.log(passwordCharacters)

  var password = [];

  for (var i = 0; i < passwordLength; i++) {
    password = password + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(password)};



var passwordText = document.querySelector("#password");
passwordText.value = password;
}


// Write password to the #password input
function writePassword() {
var password = generatePassword();
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);

var lowerCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numbers = [
  "0",
  "1",
  "2",
  "3", 
  "4", 
  "5", 
  "6", 
  "7", 
  "8", 
  "9"
];

var symbols = [
  "!",
  "?", 
  "@", 
  "#", 
  "$", 
  "%", 
  "^", 
  "&", 
  "*"
]
