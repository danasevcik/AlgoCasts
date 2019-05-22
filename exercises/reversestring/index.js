// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// MY SOLUTION BEFORE VIDEO
// SPLIT STR INTO AN ARRAY
// CALL REVERSE METHOD
// JOIN BACK TO STRING

function reverse(str) {
  return str.split("").reverse().join("");
}

reverse('hello')

module.exports = reverse;
