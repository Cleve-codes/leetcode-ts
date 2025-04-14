/**
 * Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.
 * A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
 * 0 <= i < j < k < arr.length
 * |arr[i] - arr[j]| <= a
 * |arr[j] - arr[k]| <= b
 * |arr[i] - arr[k]| <= c
 * Where |x| denotes the absolute value of x.
 * Return the number of good triplets.
 */

function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {

    let count = 0
    const n = arr.length;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n ; k++) {
                if (Math.abs(arr[i] -arr[j]) <= a && 
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c ) {
                        count++;
                    }
            }
        }
    }

    return count;

};