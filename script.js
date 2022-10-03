// Necessary variables declared
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sCharacter = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "|", "[", "]", ":", ";", "'", "<", ">", "?"];
var availableCharacters = []

// This function was provided, it displays the password to the webpage once it has been generated
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};
//The following 2 functions were written by me. The 1st one generates the password.
//Lines 21 and 28-31 include prompts and confirmation windows to collect user input
//Lines 23-26 and 34-37 are alerts in case of user selections outside the parameters of the generator
//Line 32 is a variable to guarantee that at least one of each character type that the user has selected will be included
function generatePassword() {
  var passLength = window.prompt("How many characters would you like your password to contain(between 8-128)?");

  if (passLength < 8 || passLength > 128) {
    window.alert("Your password must be between 8-128 characters!")
    return;
  };

  var userChoiceLower = window.confirm("Do you want the password to contain lower case letters?");
  var userChoiceUpper = window.confirm("Do you want the password to contain upper case letters?");
  var userChoiceNumbers = window.confirm("Do you want the password to contain numbers?");
  var userChoiceSChar = window.confirm("Do you want the password to contain special characters?");
  var guaranteedCharacters = []

  if (userChoiceLower == false && userChoiceUpper == false && userChoiceNumbers == false && userChoiceSChar == false) {
    window.alert("You must include at least one character type!")
    return;
  };
  //Lines 39-54 check the user input and create an array for avaialable characters used to create the password, and pull at least one random character for each character type the user has selected to ensure each type with be in the password
  if (userChoiceLower == true) {
    availableCharacters = availableCharacters.concat(lowerCase);
    guaranteedCharacters.push(getrandom(lowerCase))
  };
  if (userChoiceUpper == true) {
    availableCharacters = availableCharacters.concat(upperCase);
    guaranteedCharacters.push(getrandom(upperCase))
  };
  if (userChoiceNumbers == true) {
    availableCharacters = availableCharacters.concat(numbers);
    guaranteedCharacters.push(getrandom(numbers))
  };
  if (userChoiceSChar == true) {
    availableCharacters = availableCharacters.concat(sCharacter);
    guaranteedCharacters.push(getrandom(sCharacter))
  };
// The following for loops pull the correct number of random charaters from the arrays to create the password
  var password = []
  for (var i = 0; i < passLength; i++) {
    var random = Math.floor(Math.random() * availableCharacters.length);
    password.push(availableCharacters[random]);
  };
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    password[i] = guaranteedCharacters[i]
  };
  
  return password.join('');
};
//This function takes the characters that guarantee each type the user selected and includes them in the password
function getrandom(array) {
  var randIndex = Math.floor(Math.random() * array.length)
  var randElement = array[randIndex]
  return randElement
};
//This listens for the user click
generateBtn.addEventListener("click", writePassword);
