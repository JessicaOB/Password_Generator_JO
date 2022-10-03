// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sCharacter = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "|", "[", "]", ":", ";", "'", "<", ">", "?"];
var availableCharacters = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

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

  var password = []
  for (var i = 0; i < passLength; i++) {
    var random = Math.floor(Math.random() * availableCharacters.length);
    password.push(availableCharacters[random]);
  };
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    password[i] = guaranteedCharacters[i]
  }
  console.log(guaranteedCharacters);
  return password.join('');
};
function getrandom(array) {
  var randIndex = Math.floor(Math.random() * array.length)
  var randElement = array[randIndex]
  return randElement
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
