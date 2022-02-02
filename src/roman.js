var romanNumbers = ["I", "V", "X", "L", "C", "D", "M"];
var romanEquivalents = [1, 5, 10, 50, 100, 500, 1000];

export function Roman() {
  

}

function arrays(numberString) {
  var numberArray = numberString.split();
  return numberArray;
}

function numeral(numberArray) {
  romanNumeralArray = []
  numberArray.forEach(function(number) {
    var numberIndex = romanEquivalents.indexOf(parseInt(number));
    console.log("index " + numberIndex);
    var romanNumeral = romanNumbers[numberIndex];
    console.log("roman numeral " + romanNumeral);
    romanNumeralArray.push(romanNumeral);
  });
  return romanNumeralArray
}
