// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// take in a string
// create a new string to add characters to
// iterate from the end of the given string
// add each char to the string
// return the new str
function reverse(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr
}


































// MY SOLUTION BEFORE VIDEO
// SPLIT STR INTO AN ARRAY
// CALL REVERSE METHOD
// JOIN BACK TO STRING

// function reverse(str) {
//   return str.split("").reverse().join("");
// }
//
// reverse('hello')
//
//
// // Algo study group solution 1
// function strRev(str) {
//   let revStr = '';
//   for (let i = str.length - 1; i > 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// }
//
// // Algo study group solution 2
// fucntion reverse(str) {
//   return str.split("").reduce((temp, char) {
//     return char + temp
//   }, '');
// }

module.exports = reverse;
