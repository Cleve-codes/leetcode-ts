/**
 * You are given two 0-indexed arrays nums1 and nums2 of length n, both of which are permutations of [0, 1, ..., n - 1].
 * A good triplet is a set of 3 distinct values which are present in increasing order by position both in nums1 and nums2.
 * n other words, if we consider pos1v as the index of the value v in nums1 and pos2v as the index of the value v in nums2
 * then a good triplet will be a set (x, y, z) where 0 <= x, y, z <= n - 1, such that pos1x < pos1y < pos1z, and pos2x < pos2y < pos2z.
 * Return the total number of good triplets.
 */

function goodTriplets(nums1: number[], nums2: number[]): number {
    const n = nums1.length;
    
    // Store positions of elements in nums1
    const pos1 = new Map<number, number>();
    for (let i = 0; i < n; i++) {
        pos1.set(nums1[i], i);
    }
    
    // Binary Indexed Tree to efficiently count elements
    const bit = new Array(n + 1).fill(0);
    
    // Update BIT at index i with value val
    function update(i: number, val: number): void {
        i += 1; // 1-indexed for BIT
        while (i <= n) {
            bit[i] += val;
            i += i & -i; // Next index
        }
    }
    
    // Query sum from 0 to i
    function query(i: number): number {
        let sum = 0;
        i += 1; // 1-indexed for BIT
        while (i > 0) {
            sum += bit[i];
            i -= i & -i; // Previous index
        }
        return sum;
    }
    
    let result = 0;
    
    // Process nums2
    for (let i = 0; i < n; i++) {
        const val = nums2[i];
        const pos = pos1.get(val)!;
        
        // Count elements to the left in nums1 that are already processed
        // (meaning they appear before both in nums1 and nums2)
        const leftCount = query(pos);
        
        // Count elements to the right in nums1 that are not yet processed
        // (meaning they will appear after both in nums1 and nums2)
        const rightCount = (n - 1 - pos) - (i - leftCount);
        
        // For each element to the left and each to the right, form a triplet
        result += leftCount * rightCount;
        
        // Update the BIT to mark this position as processed
        update(pos, 1);
    }
    
    return result;
}