/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

function twoSum(nums: number[], target: number): number[] {

    const numMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }

        numMap.set(num, i);
    }

    throw new Error("No two sum solution found");

}