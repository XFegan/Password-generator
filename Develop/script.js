// Assignment code here


//Charecter selection for password
var capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialCharecter = "!#$%&()*+,-./:;<=>?@[\]^_{|}~";

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

  //test coce
  // var characterPool = {
    // capital: useCapitalLetter
    // lower: useLowerCase
    // special: 
  }
  //If statements to pull the character 
  if(useCapitalLetter) {
    selectedPool = selectedPool + capitalLetter;
    newPassword = capitalLetter.charAt(Math.floor(Math.random())*capitalLetter.length)
  }

  if(useLowerCase) {
    selectedPool= selectedPool + capitalLetter;
    newPassword = lowerCase.charAt(Math.floor(Math.random())*lowerCase.length)
  }
  
  if(useNumber) {
    selectedPool= selectedPool + number;
    newPassword = number.charAt(Math.floor(Math.random())*number.length)
  }

  if(useSpecialCharacter) {
    selectedPool= selectedPool + specialCharacter;
    newPassword = specialCharacter.charAt(Math.floor(Math.random())*specialCharacter.length)
  }

  //For loop to generate a new password 
  for (var i=newPassword.length; i <length; i++) {
    newPassword += selectedPool.charAt(math.floor(Math.random()*selectedPool.length))
  }
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