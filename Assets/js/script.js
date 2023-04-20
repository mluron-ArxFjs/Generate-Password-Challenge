// Assignment Code
var generateBtn = document.querySelector("#generate");
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '10'];
const symbols = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
const Lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const Upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


function generatePassword() {
  // get input and validate the collected input data
  let possibleCharacters = [];
  numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
  }

  hasLowercase = confirm("Do you want lowercase characters?");
  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(Lower)
  }
  else {
    alert("Your password will NOT have lowercase characters.");
  }

  hasUppercase = confirm("Do you want uppercase characters?");
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(Upper)
  }
  else {
    alert("Your password will NOT have uppercase characters.");
  }

  hasNumbers = confirm("Do you want to use numbers?");
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers)
  }
  else {
    alert("Your password will NOT have numbers.");
  }

  hasSpecial = confirm("Do you want special characters?");
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(symbols)
  }
  else {
    alert("Your password will NOT have special characters.");
  }

  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    return "Please select at least one character type.";
  };

  // Incremental loop for the length of password and a randomIndex
  let password = "";
  for (let i = 0; i < numberOfCharacters; i++) {
    let randomIndex = [Math.floor(Math.random() * possibleCharacters.length)];
    var randomCharacter = "";
    password = password + possibleCharacters[randomIndex];
  }
  if (hasLowercase && !hasLowerCase(password)) {
    randomCharacter = Lower[randomIndex];
  }
  if (hasUppercase && !hasUpperCase(password)) {
    randomCharacter = Upper[randomIndex];
  }
  password = password + randomCharacter;
  return password;

  function hasLowerCase(str) {
    return (/[a-z]/.test(str));
  }
  function hasUpperCase(str) {
    return (/[A-Z]/.test(str));
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
