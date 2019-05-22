// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// MY SOLUTION BEFORE VIDEO
// LOOP THROUGH FORWARDS
// LOOP THROUGH BACKWARDS
// IF ITS NOT THE SAME, RETURN FALSE
// AT THE VERY END RETURN TRUE

function palindrome(str) {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = str.length - 1; j > 0; j--) {
      if (str[i] !== str[j]) {
        // console.log('false');
        return false
      }
      else {
        // console.log('true');
        return true
      }
    }
  }
}

// palindrome('hello')
palindrome('hannah')

module.exports = palindrome;
