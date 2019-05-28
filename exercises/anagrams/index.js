// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// MY SOLUTION BEFORE VIDEO
// lowercase both strings & remove chars and spaces
// create char hash for stringA and stringB
// create helper fcn and to return hash of all char counts
// call helper for a and b
// compare hash for a and b
// if different, return false
// if same, return true

function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w\s]|_/g, "").replace(/\s+/g, '').toLowerCase()
  stringB = stringB.replace(/[^\w\s]|_/g, "").replace(/\s+/g, '').toLowerCase()
  let newHashA = charHash(stringA)
  let newHashB = charHash(stringB)
  let hashAKeys
}

function charHash(str) {
  let hash = {}
  for (var i = 0; i < str.length; i++) {
    let char = str[i]
    let hashKeys = Object.keys(hash)
    if (hashKeys.includes(char)) {
      hash[char] ++
    } else {
      hash[char] = 1
    }
  }
  return hash
}

// anagrams('THIs is a !#$% sentence with things!', 'sdaofina')
anagrams('rail safety', 'fairy tales')

module.exports = anagrams;
