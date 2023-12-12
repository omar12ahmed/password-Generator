// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  let length= parseInt(prompt("Enter the Length of the password"))

  if(isNaN(length) || length < 8 || length >128){
    alert("Please enter a number between 8 and 128")
    return null;
  }

  let includeSpecialCharacter = confirm("Do you want to include special character");
  let includeNumeric = confirm("Do yo want to include numeric characters")
  let includeUppercase = confirm("Do you want to include uppercase Character")
  let includeLowercase = confirm("Do you want include lowercase Characters")

  if(!includeLowercase && !includeNumeric && !includeSpecialCharacter && !includeUppercase){
    alert("Please include atleast one character type")
    return null;
  }

  return{
    length: length,
    includeSpecialCharacter:includeSpecialCharacter,
    includeLowercase:includeLowercase,
    includeUppercase:includeUppercase,
    includeNumeric:includeNumeric
  }

}

// Function for getting a random element from an array
function getRandom(arr) {
 
  var random = Math.floor(Math.random() * arr.length);
  console.log(random)
  return arr[random];

}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  let password = ""
  let allCharacters = []

  if(options.includeSpecialCharacter){
    allCharacters = allCharacters.concat(specialCharacters)
  }
  if(options.includeLowercase){
    allCharacters = allCharacters.concat(lowerCasedCharacters)
  }
  if(options.includeUppercase){
    allCharacters = allCharacters.concat(upperCasedCharacters)
  }
  if(options.includeNumeric){
    allCharacters = allCharacters.concat(numericCharacters)
  }

  for(let i =0; i< options.length;i++){
    password+= getRandom(allCharacters)
  }
 return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);