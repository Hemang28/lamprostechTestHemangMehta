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
const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
const result = shuffle(nums, n);
console.log(result);