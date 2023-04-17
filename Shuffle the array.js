function shuffle(nums, n) {
    // Create a new array to store the shuffled elements
    const shuffled = [];

    // Loop through the first n elements of nums
    for (let i = 0; i < n; i++) {
        // Append the i-th element from the first half of nums
        shuffled.push(nums[i]);
        // Append the i-th element from the second half of nums
        shuffled.push(nums[i + n]);
    }

    // Return the shuffled array
    return shuffled;
}

//To test the output

// Test case 1
const nums1 = [2, 5, 1, 3, 4, 7];
const n1 = 3;
const result1 = shuffle(nums1, n1);
console.log("Output for Example 1: ", result1); // Output Should be : [2, 3, 5, 4, 1, 7]

// Test case 2
const nums2 = [1, 2, 3, 4, 4, 3, 2, 1];
const n2 = 4;
const result2 = shuffle(nums2, n2);
console.log("Output for Example 2: ", result2); // Output Should be : [1, 4, 2, 3, 3, 2, 4, 1]

// Test case 3
const nums3 = [1, 1, 2, 2];
const n3 = 2;
const result3 = shuffle(nums3, n3);
console.log("Output for Example 3: ", result3); // Output Should be : [1, 2, 1, 2]
