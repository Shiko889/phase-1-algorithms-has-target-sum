// index.js

// Function to check if any pair of numbers in the array adds up to the target number
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

// Export the function if needed
module.exports = hasTargetSum;
