var hexagonsCollection = document.getElementsByClassName('hexagon-content');
var hexagons = [].slice.call(hexagonsCollection);
var centerHexCollection = document.getElementsByClassName('center-hexagon-content');
var centerHex = [].slice.call(centerHexCollection);
var solutionLabel = document.getElementsByClassName('solutions')[0];
var solutions = ['abc', '123', 'you&me'];


function solve(el) {
  var isFilled = true;
  var hasDuplicates = false;
  var enteredLetters = new Set();
  for(var i = 0; i < hexagons.length; i++) {
    let hex = hexagons[i];
    let ch = hex.value;
    if ( enteredLetters.has(ch) ) {
        hasDuplicates = true;
    };
    enteredLetters.add(ch);
    if( !(/^[A-Z]$/i.test(ch)) ) {
      isFilled = false;
    };
  }

  
   if (isFilled && !hasDuplicates) {
    for (var j=0; j<solutions.length; j++ ) {
      let cur = solutionLabel.innerText;
      if(j > 0) {
        solutionLabel.innerText = cur+", "+solutions[j];
      }
      else {
      solutionLabel.innerText = cur+" "+solutions[j];
      }
    }
   }
   else if(!isFilled) {
    alert('You must enter a letter in every hexagon');
   }
   else {
     alert('There cannot be any duplicate letters')
   }
  
  setTimeout(function (){
    el.blur();
   }, 80); 
}

function add() {
  if(this.value == "") {
      this.value = "-"
  }
};

function remove() {
  if(this.value == "-") {
      this.value = ""
  }
};

for(var i = 0; i < hexagons.length; i++) {
    hexagons[i].value = '-';
    hexagons[i].addEventListener('focusin', remove);
    hexagons[i].addEventListener('focusout', add);
 }

