/**
 * You are given an array of integers nums of length n and a positive integer k.
 * The power of an array is defined as:
 * Its maximum element if all of its elements are consecutive and sorted in ascending order.
 * -1 otherwise.
 * You need to find the power of all subarrays of nums of size k.
 * Return an integer array results of size n - k + 1, where results[i] is the power of nums[i..(i + k - 1)].
 */


function resultsArray(nums: number[], k: number): number[] {
    let finalArr: number[] = [];
    let n: number = nums.length;
    
    for (let i = 0; i <= n - k; i++) {
        // Extract the subarray
        let subArr = nums.slice(i, i + k);
        
        // Check if the subarray is already sorted
        let isSorted = true;
        for (let j = 0; j < k - 1; j++) {
            if (subArr[j] >= subArr[j + 1]) {
                isSorted = false;
                break;
            }
        }
        
        // Check if elements are consecutive
        let isConsecutive = isSorted; // Only check for consecutive if sorted
        if (isSorted) {
            for (let j = 0; j < k - 1; j++) {
                if (subArr[j + 1] - subArr[j] !== 1) {
                    isConsecutive = false;
                    break;
                }
            }
        }
        
        if (isConsecutive) {
            finalArr.push(Math.max(...subArr)); // Push the maximum element
        } else {
            finalArr.push(-1);
        }
    }
    
    return finalArr;
}