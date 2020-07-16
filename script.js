// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "#", "$", "%", "*"];

  //Get Dom elements
  let length = document.getElementById("passLength").value;
  let lower = document.getElementById("passLower");
  const upper = document.getElementById("passUpper");
  const number = document.getElementById("includeNumbers");
  const symbol = document.getElementById("passSymbols");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate the password
function generatePassword() {
  //Add characters to the password
  let password = "";
  var availableChars = [];

  for (i = 0; password.length < length; i++) {

    if (lower.checked == true) {
      password += getRandomCharacter(lowerChars);
      availableChars.concat(lowerChars);
    }
    if (upper.checked == true) {
      password += getRandomCharacter(upperChars);
      availableChars.concat(upperChars);
    }
    if (number.checked == true) {
      password += getRandomCharacter(numbers);
      availableChars.concat(numbers);
    }
    if (symbol.checked == true) {
      password += getRandomCharacter(symbols);
      availableChars.concat(symbols);
    }
    
  }
    return password;
  }

//Get random char from array
function getRandomCharacter(charArray) {
  var random = charArray[Math.floor(Math.random() * charArray.length)];
  return random;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
