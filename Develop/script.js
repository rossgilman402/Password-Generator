// Assignment Code
var generateBtn = document.querySelector("#generate");

//Fuctions ========================================================

// The 4 functions below will create their respective array with the characters inside.
// Then randomize a number for their corresponding length(number of characters)
// then return the specific character that goes with the random number
function getRandomUpperCase() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var randNum = Math.floor(Math.random() * (upperCase.length - 1));
  return upperCase[randNum];
}

function getRandomLowerCase() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var randNum = Math.floor(Math.random() * (lowerCase.length - 1));
  return lowerCase[randNum];
}

function getRandomNumber() {
  var numbers = "0123456789".split("");
  var randNum = Math.floor(Math.random() * (numbers.length - 1));
  return numbers[randNum];
}

function getRandomSpecial() {
  var special = "!#$%&()*+,-./;:<=>?@[]^_|{}~".split("");
  var randNum = Math.floor(Math.random() * (special.length - 1));
  return special[randNum];
}

//This function will generate the random password after retrieving user input
function generatePassword() {
  //Ask user for their desired password length
  var passwordLength = prompt(
    "Enter in desired password length (between 8-128)"
  );

  // If the entered password length is not between 8 and 128
  // then the program will continuously ask for a new length that is the proper size
  if (passwordLength <= 7 || passwordLength >= 129) {
    while (passwordLength <= 7 || passwordLength >= 129)
      passwordLength = prompt(
        "Error: Password length must be between 8-128 characters in length"
      );
  }

  //Ask which types of characters need to be in randon password
  var isUpper = confirm(
    "click ok to include uppercase letters or cancel to skip"
  );
  var isLower = confirm("click ok to include lower letters or cancel to skip");
  var isNumeric = confirm("click ok to include numbers or cancel to skip");
  var isSpecial = confirm(
    "click ok to include special character or cancel to skip"
  );

  // Check if the user entered at least one character choice if not end error message and restart program
  if (!isUpper && !isLower && !isNumeric && !isSpecial) {
    alert("Error: one character type must be selected!");
    password = "";
    return generatePassword();
  }

  //Initialize empty password
  var password = "";

  //Loop through the desired length of password and check
  // if the specific characters are allowed and add a random one by calling their
  // functions
  for (var i = 0; i < passwordLength; i++) {
    if (isUpper) {
      password += getRandomUpperCase();
    }
    if (isLower) {
      password += getRandomLowerCase();
    }
    if (isNumeric) {
      password += getRandomNumber();
    }
    if (isSpecial) {
      password += getRandomSpecial();
    }
  }

  // Since each iteration of the loop multiple characters are added we will cut
  // the password to make it a their desired length and return
  password = password.slice(0, passwordLength);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
