// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate the password
function generatePassword() {
  //Get Dom elements
  const length = document.getElementById("passLength").value;
  const number = document.getElementById("includeNumbers").value;
  console.log(number);

  //Add characters to the password
  let password = "";
  while(password.length < length){
  password += getRandomLowercase();
  password += getRandomUppercase();
  password += getRandomNumer();
  password += getRandomSymbol();
  }
  return password;
}

// random uppercase letter function
function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// random lowercase letter function 
function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// random number function
function getRandomNumer() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//random symbol function
function getRandomSymbol() {
  const symbols = "!@#$%^&*";
  return symbols[Math.floor(Math.random() * 8)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
