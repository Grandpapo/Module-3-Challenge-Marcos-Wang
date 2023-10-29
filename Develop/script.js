// Assignment code here
function generatePassword(){
  let myPassword = "";
  let validchars = "";
  let letter;
  let arrayLength = prompt('choose a password length from 8 to 128 characters');
  if (confirm('include lowercase?')){
    validchars += "abcdefghijklmnopqrstuvwxyz";
  }
  if(confirm('include uppercase?')){
    validchars += "ABCDEFGHIJKLMONPQRSTUVXYZ";
  }
  if(confirm('include numbers?')){
    validchars += "0123456789";
  }
  if(confirm('include special characters?')){
    validchars += "!@#$%&";
  }



  for (let i =  1; i<=parseFloat(arrayLength); i++){

    letter = validchars[Math.floor((Math.random() * validchars.length)+1)]
    myPassword+= letter;

  }

  return myPassword;

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
