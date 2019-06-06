// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// create a string
// loop from 0 to n
// create str
// loop again, if the second is less than first, add '#'
// otherwise, just add ' '
// console log each iteration


function steps(n) {
  for (let j = 0; j < n; j++) {
    let str = '';
    for (let i = 0; i < n; i++) {
      if (i <= j) {
        str += '#'
      } else {
        str += ' '
      }
    }
    console.log(str);
  }
}

steps(5)

module.exports = steps;
