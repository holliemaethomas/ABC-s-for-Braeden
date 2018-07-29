// putt the alphabet into an array//
// write the letters to the DOM//
//add button for next//
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var displayNumber = 1;

let getLetters = document.getElementById('letterBox');
getLetters.innerHTML = alphabet[0];
let washDone = false;
document.getElementById('showNext').addEventListener('click', function (){
  getLetters.innerHTML = alphabet[displayNumber];
  displayNumber ++;
  console.log(displayNumber);
  // console.log(alphabet);
  if(displayNumber === 26){
    washDone = true;
  }
  
  if(washDone === true){
    var randomNumber = makeRandom();
    displayNumber = randomNumber;
    console.log(displayNumber);
  }


});

function makeRandom() {
  let random = Math.random();
  let otherNumber = alphabet.length;
  let randomNumber = random * otherNumber;
  console.log(random, otherNumber, randomNumber);
  return Math.floor(randomNumber);
}



// if mod26 =0