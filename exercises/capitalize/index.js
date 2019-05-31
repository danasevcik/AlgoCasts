// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// split the string into an array
// loop though and access each word
// capitalize at index 0, lowercase after that
// join back to a string
// return string

function capitalize(str) {
  let arr = str.split(' ')
  let capArr = []
  for (let i = 0; i < arr.length; i++) {
    capArr.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase())
  }
  return capArr.join(' ')
}

capitalize('hi how aRE YOU')


module.exports = capitalize;
