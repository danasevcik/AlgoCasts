// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// MY SOLUTION BEFORE VIDEO
// CONVERT NUMBER TO A STRING
// SPLIT TO ARRAY
// REVERSE ARRAY
// JOIN BACK TO STRING
// CONVERT TO NUMBER

function reverseInt(n) {
  let str = n.toString();
  console.log(str);
  return parseInt(str.split("").reverse().join(""));
  // Math.sign(n) * parseInt(str.split("").reverse().join(""))
}

reverseInt(51)

module.exports = reverseInt;
