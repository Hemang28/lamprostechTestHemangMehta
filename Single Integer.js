function singleNumber(nums) {
    // Initializing a variable to store the result
    let result = 0;

    // Here, Looping through the array of numbers
    for (let num of nums) {
        // XOR operation: The same number XORed with itself results in 0, 
        // So all pairs of numbers will be cancelled out, leaving only the single number
        result ^= num;
    }

    // Returning the single number
    return result;
}

// Test case 1
const nums1 = [2, 2, 1];
const result1 = singleNumber(nums1);
console.log("Output for Example 1: ", result1); // Output should be : 1

// Test case 2
const nums2 = [4, 1, 2, 1, 2];
const result2 = singleNumber(nums2);
console.log("Output for Example 2: ", result2); // Output should be : 4

// Test case 3
const nums3 = [1];
const result3 = singleNumber(nums3);
console.log("Output for Example 3: ", result3); // Output should be : 1
