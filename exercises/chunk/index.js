// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// MY SOLUTION BEFORE VIDEO
// create new array to push into
// get the number of chunks that will be in the final array
// iterate over the number of chunks
// for each iteration, push a sliced chunk of the coped array into the new array
// return array at the end

function chunk(array, size) {
  let newArray = []
  let copiedArray = [...array]
  let numOfChunks = Math.ceil(copiedArray.length / size)
  for (let i = array[0]; i < numOfChunks; i ++) {
    newArray.push(copiedArray.splice(0, size))
  }
  console.log(newArray);
  return newArray
}

chunk([1,2,3,4,5,6,7,8], 2)

module.exports = chunk;
