/**
 * Given an integer array arr and a mapping function fn, 
 * return a new array with a transformation applied to each element.
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 * Please solve it without the built-in Array.map method.
 */

function map(arr: number[], fn: (n: number, i: number) => number): number[] {

    const newArr: number[] = [];

    for(let i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i], i));
    }

    return newArr;

}




function plusone(n) { return n + 1; }
// const arr = [1,2,3]
// console.log(map(arr, plusone)) // [2,3,4]

function plusI(n, i) { return n + i; }
// console.log(map(arr, plusI)) // [1,3,5]

const arr = [10, 20, 30]
function constant(n, i) { return 42; }
console.log(map(arr, constant)) // [42, 42, 42]