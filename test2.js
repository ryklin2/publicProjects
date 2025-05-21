function medians(values, k) {
    const n = values.length;
    let maxMedian = -Infinity;
    let minMedian = Infinity;
    
    // Function to calculate median of a sorted subsequence
    function calculateMedian(sortedSubseq) {
        const mid = Math.floor(k / 2);
        // Use the middle element for the median
        return sortedSubseq[mid];
    }
    
    // Generate all subsequences of length k
    function generateSubsequences(start, current) {
        if (current.length === k) {
            // Sort the subsequence
            const sortedSubseq = [...current].sort((a, b) => a - b);
            const median = calculateMedian(sortedSubseq);
            maxMedian = Math.max(maxMedian, median);
            minMedian = Math.min(minMedian, median);
            return;
        }
        
        for (let i = start; i < n; i++) {
            current.push(values[i]);
            generateSubsequences(i + 1, current);
            current.pop(); // Backtrack
        }
    }
    
    generateSubsequences(0, []);
    
    return [maxMedian, minMedian];
}

// Test Case 1: Example from the problem
console.log(medians([1, 2, 3], 2)); // Expected: [2, 1]

// Test Case 2: Odd k value
console.log(medians([5, 2, 7, 1, 3], 3)); // Expected: [5, 2]
/* Subsequences:
   [5,2,7] -> sorted [2,5,7] -> median 5
   [5,2,1] -> sorted [1,2,5] -> median 2
   [5,2,3] -> sorted [2,3,5] -> median 3
   ... and so on */

// Test Case 3: Larger array
console.log(medians([9, 3, 8, 2, 1, 7, 4], 4)); // Expected: [7, 1]

// Test Case 4: Array with duplicate elements
console.log(medians([4, 2, 2, 4, 1, 4], 3)); // Expected: [4, 1]

// Test Case 5: All elements are the same
console.log(medians([5, 5, 5, 5], 2)); // Expected: [5, 5]

// Test Case 6: Edge case k=1
console.log(medians([7, 3, 9, 2], 1)); // Expected: [9, 2]

// Test Case 7: Edge case k=n (length of array)
console.log(medians([4, 1, 7], 3)); // Expected: [4, 4]

// Test Case 8: Larger array with k=2
console.log(medians([10, 5, 1, 8, 3], 2)); // Expected: [8, 1]


console.log(medians([9, 3, 8, 2, 1, 7, 4], 4));