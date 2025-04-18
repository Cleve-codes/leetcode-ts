/**
 * Given a 0-indexed integer array nums of length n and an integer k, 
 * return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.
 */

function countPairs(nums: number[], k:number): number {
    let count = 0;
    
    // Map each value to an array of its indices
    const valueToIndices = new Map<number, number[]>();
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        if (!valueToIndices.has(num)) {
            valueToIndices.set(num, []);
        }
        
        // For each new index, check if it forms valid pairs with previous indices
        const indices = valueToIndices.get(num)!;
        
        for (const prevIndex of indices) {
            // Check if i * prevIndex is divisible by k
            if ((i * prevIndex) % k === 0) {
                count++;
            }
        }
        
        // Add current index to the list for this value
        indices.push(i);
    }
    
    return count;
}

