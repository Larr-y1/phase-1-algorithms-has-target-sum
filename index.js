function hasTargetSum(array, target) {
  let seenNumbers = new Set();

  for (let num of array) {
    let complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}

// Big O Time Complexity: O(n) – We iterate through the array once, using a set for constant-time lookups.


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1. Define a function named `hasTargetSum` that takes an array and a target sum as parameters.
  2. Create an empty set called `seenNumbers` to store numbers we have already checked.
  3. Iterate through each number in the array:
    - Calculate the complement by subtracting the current number from the target sum.
    - Check if the complement exists in `seenNumbers`.
    - If found, return `true` (because two numbers add up to the target).
    - Otherwise, add the current number to `seenNumbers`.
  4. If no such pair is found, return `false`.

*/

/*
  Add written explanation of your solution here
  The goal is to determine if any two numbers in the given array add up to the target sum.

  1.We use a set to keep track of numbers we have seen so far.

  2.For each number in the array:
    - We compute the complement (i.e., target - number).
    - If the complement is already in the set, we immediately return true (since we found a pair).
    - Otherwise, we add the current number to the set.

  3.If we go through the entire array without finding a match, we return false.

  This approach ensures an O(n) time complexity, which is efficient compared to a brute force O(n²) approach.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
