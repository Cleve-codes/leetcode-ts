/**
 * Given an integer array nums and an integer k, return the number of good subarrays of nums.
 * A subarray arr is good if there are at least k pairs of indices (i, j) such that i < j and arr[i] == arr[j].
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

function countGood(nums: number[], k: number): number {
    let count = 0;
    let left = 0;
    let currentPairs = 0;
    const freq: Map<number, number> = new Map();
    
    // For each possible right boundary of subarray
    for (let right = 0; right < nums.length; right++) {
        // Update frequency and pairs count when adding nums[right]
        const num = nums[right];
        // New pairs formed = frequency of this number so far
        const newPairs = freq.get(num) || 0;
        currentPairs += newPairs;
        
        // Update frequency
        freq.set(num, (freq.get(num) || 0) + 1);
        
        // Shrink window from left if possible while maintaining at least k pairs
        while (left <= right && currentPairs >= k) {
            // All subarrays ending at right and starting from left to right are good
            count += nums.length - right;
            
            // Remove nums[left] from window
            const leftNum = nums[left];
            const leftFreq = freq.get(leftNum) || 0;
            // Removing one occurrence reduces pairs by (frequency - 1)
            currentPairs -= (leftFreq - 1);
            
            // Update frequency
            freq.set(leftNum, leftFreq - 1);
            if (freq.get(leftNum) === 0) {
                freq.delete(leftNum);
            }
            
            left++;
        }
    }
    
    return count;
}