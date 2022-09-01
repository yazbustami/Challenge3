//self note:tutor reviewed 9.1.23
// Assignment Code
//characters that can be used for password. # of 8-128 characters with lc,upc,numbers,spc
// var generateBtn = document.querySelector("#generate");
let generateBtn = document.querySelector("#generate");
const uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const spc = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "="]

let passArray = [];
let pass = []

//function to make genpass a function with inputting value heading. 8-128
function generatePassword() {
  let length = prompt ("How many characters should the password have?");

  if (length < 8 || length > 128)
}

//types of characters
let upc = confirm ("Would you like to have Uppercase?");
let lc = confirm ("Would you like to have lowercase?");
let num = confirm ("Would you like to have numbers?");
let spc = confirm ("Would you like to have special characters?");

if (!upc && !lc && !num & !spc) {
  alert ("Please select at least one type of character. Please try again.")
  return ("Please select one character type")
}


//push array to new array if true.
//concat=joining arrays
if (upc){
  passArray=passArray.concat(upc)
}
if (lc){
  passArray=passArray.concat(lc)
}
if (num){
  passArray=passArray.concat(num)
}
if (spc){
  passArray=passArray.concat(spc)
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
