// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// MY SOLUTION BEFORE VIDEO
// LOOP THROUGH 1 TO N
// IF DIVISIBLE BY 3 AND 5, LOG FIZZBUZZ
// IF DIVISIBLE BY 3, LOG FIZZ
// IF DIVISIBLE BY 5, LOG BUZZ
// ELSE LOG THE NUMBER

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
      console.log('FIZZ');
    } else if (i % 5 === 0) {
      console.log('BUZZ');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(5)

module.exports = fizzBuzz;
