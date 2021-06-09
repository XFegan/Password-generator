// Assignment code here


//Charecter selection for password
var capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialCharacter = "!#$%&()*+,-./:;<=>?@[\]^_{|}~";

//Function for password
function generatePassword() {
  var newPassword= "";
  var selectedPool= "";
  //THe Prompts for Password
  var passwordLength= parseInt(prompt ("How long do you want your password to be?")); 
  while (passwordLength<8 || passwordLength>128) {
    var passwordLength = parseInt(prompt("Password HAS to be a number between 8 and 128. How long do you want your password to be?"));
  }
  //Conditions
  var useCapitalLetter = confirm ("Do you want to use a Capital Letter?");
  var useLowerCase = confirm ("Do you want to use a Lower Case Letter?");
  var useNumber= confirm ("Do you want to use a Number?");
  var useSpecialCharacter= confirm ("Do you want to use a Special Character?");

  //If statements to pull the character 
  if(useCapitalLetter) {
    selectedPool += capitalLetter;
  }

  if(useLowerCase) {
    selectedPool += lowerCase;
  }
  
  if(useNumber) {
    selectedPool += number;
  }

  if(useSpecialCharacter) {
    selectedPool += specialCharacter;
  }


  //For loop to generate a new password 
  for (var i=0; i <passwordLength; i++) {
    newPassword += selectedPool.charAt(Math.floor(Math.random()*selectedPool.length));
  }
  console.log (newPassword)
  return newPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);