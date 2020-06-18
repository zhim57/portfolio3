//variable for the "Generate" button
var generateBtn = document.getElementById("generate")
//function on clicking the "Generate" button
function writePassword() { // this function starts  WHEN I click the button to generate a password

  // setting the variables

  var passPool = ""; // variable to hold the whole pool of possible password characters as a string
  var lettersLow = "abcdefghijklmnopqrstuvwxyz"; // lowercase string
  var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";// uppercase string
  var numericSet = "0123456789";//numbers
  var specialSet = "!@#$%^&*()-_+[]{}";// specials

  //re setting the boolean variables 
  var lowCase = false;
  var upperCase = false;
  var numericCha = false;
  var specialCha = false;

  // variable for the lenght
  var passLength = 0;
  // variable for the password string
  var passValue = "";
  var randomSymbol = ""; //variable for chhsing a random arrey index
  var randomcharacter = ""; // variable for the character correcponding to te random index

  // function for  prompts for user input for password criteria

  while ((!lowCase) && (!upperCase) && (!numericCha) && (!specialCha)) { // while function to guarantee that at least one of the four boolean variables is true
    alert("Please choose at least one set of characters")
    lowCase = confirm("Would you like your password to contaln LOWER CASE LETTERS?")
    if (lowCase) {  //whether to include the lowercase character string
      passPool = lettersLow;
    }
    upperCase = confirm("Would you like it also to contain CAPITALS")
    if (upperCase) { //whether to include the upper case character string
      passPool = passPool + lettersUpper;
      console.log(passPool);
    }
  }
  numericCha = confirm("Would you like also to use NUMBERS")
  if (numericCha) { //whether to include the numbers string
    passPool = passPool + numericSet;
  }
  specialCha = confirm("Would you like to include SPECIAL CHARACTERS : !@#$%^&*()-_+[]{}")
  if (numericCha) { //whether to include the special  character string
    passPool = passPool + specialSet;
  }
  // converting the pass wordPool  string to an array
  var passPoolar = passPool.split(''); // empty string separator
  // WHEN prompted for the length of the password
  while ((passLength < 8) || (passLength > 128) || (parseInt(passLength) + '' === 'NaN')) {
    //function to cycle  untill all   three negative conditions are eliminated.
    passLength = prompt("Please enter the LENGTH  of the desired Password");
    if ((passLength < 8) || (passLength > 128)) { //checking for the number to be between 8 and 128
      alert("the password has to be between 8 and 128 characters in LENGTH, please reenteer your LENGTH value ");
      var passLengthVal = (parseInt(passLength));
    }
    // checking the input to be a number
    else if (parseInt(passLength) + '' === 'NaN') {
      alert("Not a valid number, please enter a number between 8 and 128");
    }
    else { //the lenght is validated and confirmed to the user
      alert("selected lenght is : " + passLength);
    }
  }
  for (var i = 0; i < passLength; i++) { // for loop , 
    randomSymbol = [Math.floor(Math.random() * (passPoolar.length))] //for pulling random indexes of the arrey
    randomcharacter = (passPoolar[randomSymbol]) //converting the index to charachter 
    passValue = (passValue + randomcharacter); //adding the characters to the pass Value  string one for each cycle
  }
  var passShow = document.getElementById("password")
  passShow.innerText = (passValue)
  passShow.style.fontSize = "22px";
  passShow.style.fontWeight = "bold";
  // generateBtn = document.getElementById("generate")
}
generateBtn.addEventListener("click", writePassword);
