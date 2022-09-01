//self note:tutor reviewed 9.1.23
// Assignment Code
//characters that can be used for password. # of 8-128 characters with lc,upc,numbers,spc
// var generateBtn = document.querySelector("#generate");
let generateBtn = document.querySelector("#generate");
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const spch = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "="]


//function to make genpass a function with inputting value heading. 8-128
function generatePassword() {
  let length = prompt("How many characters should the password have?");
  let passArray = [];
  let pass = []

  if (length < 8 || length > 128 || isNaN(length)) {
  return "Please enter correct numerical value"
  }


  //types of characters
  let upc = confirm("Would you like to have Uppercase?");
  let lc = confirm("Would you like to have lowercase?");
  let num = confirm("Would you like to have numbers?");
  let spc = confirm("Would you like to have special characters?");

  if (!upc && !lc && !num & !spc) {
    alert("Please select at least one type of character. Please try again.")
    return "Please select one character type"
  }


  //push array to new array if true.
  //concat=joining arrays
  if (upc) {
    passArray = passArray.concat(upper)
  }
  if (lc) {
    passArray = passArray.concat(lower)
  }
  if (num) {
    passArray = passArray.concat(numer)
  }
  if (spc) {
    passArray = passArray.concat(spch)
  }
  console.log(passArray)
  for (let index = 0; index < length; index++) {
    pass.push(passArray[Math.floor(Math.random() * passArray.length)])
  }
  console.log(pass)
  //join
  pass = pass.join("");

  //array for new pass
  passArray = [];
  return pass
}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
function writePassword() {
  let passwordDisplay = generatePassword();
  let passwordText = document.querySelector("#password");


  passwordText.value = passwordDisplay;
  pass = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);