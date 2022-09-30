// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sCharacter = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "|", "[", "]", ":", ";", "'", "<", ">", "?"];
var availableCharacters = []

// Write password to the #password input
function writePassword() {
  var passLength = window.prompt("How many characters would you like your password to contain(between 8-128)?");

  if (passLength < 8 || passLength > 128) {
    window.alert("Your password must be between 8-128 characters!")
  };

  var userChoiceLower = window.confirm("Do you want the password to contain lower case letters?");
  var userChoiceUpper = window.confirm("Do you want the password to contain upper case letters?");
  var userChoiceNumbers = window.confirm("Do you want the password to contain numbers?");
  var userChoiceSChar = window.confirm("Do you want the password to contain special characters?");
  console.log(passLength, userChoiceLower, userChoiceUpper, userChoiceNumbers, userChoiceSChar);

  if (userChoiceLower == false && userChoiceUpper == false && userChoiceNumbers == false && userChoiceSChar == false) {
    window.alert("You must include at least one character type!")
  };

  //if userChoiceLower = true (add lowerCase to availableCharacters)
  //if userChoiceUpper = true (add upperCase to availableCharacters)
  //if userChoiceLower = true (add numbers to availableCharacters)
  //if userChoiceLower = true (add sCharacter to availableCharacters)

  for (var i = 0; i < passLength; i++) {

  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
