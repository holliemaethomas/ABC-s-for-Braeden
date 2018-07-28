// putt the alphabet into an array//
// write the letters to the DOM//
//add button for next//
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var counter = 1;

let getLetters = document.getElementById('letterBox');
getLetters.innerHTML = alphabet[0];

document.getElementById('showNext').addEventListener('click', function (){
  getLetters.innerHTML = alphabet[counter];
  counter ++;
  console.log(alphabet);
});



// if mod26 =0