// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// MY SOLUTION BEFORE VIDEO
// CREATE A HASH
// ITERATE, CHECK IF THE CHAR IS A KEY
// IF YES
  // INCREASE VALUE BY 1
// IF NO
  // ADD KEY WITH VALUE OF 0
// SORT BY VALUE
// RETURN LARGEST KEY

function maxChar(str) {
  let charHash = {}
  let arr = str.split("")

  for (let i = 0; i < arr.length - 1; i++) {
    let char = arr[i]
    if (Object.keys(charHash).includes(char)) {
      charHash[char] ++
    } else {
      charHash[char] = 1
    }
  }

  let keys = Object.keys(charHash)
  keys.sort(function(a, b) {
    return charHash[a] - charHash[b]
  }).reverse()

  console.log(keys);
  console.log(keys[0]);
  
  return keys[0]
}

maxChar('hello')

module.exports = maxChar;
