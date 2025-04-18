/**
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
 * countAndSay(1) = "1"
 * countAndSay(n) is the run-length encoding of countAndSay(n - 1).
 * Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical
 * characters (repeated 2 or more times) with the concatenation of the character and the number marking the count
 * of the characters (length of the run). For example, to compress the string "3322251" we replace "33" with
 * "23", replace "222" with "32", replace "5" with "15" and replace "1" with "11". Thus the compressed
 * string becomes "23321511".
 * Given a positive integer n, return the nth element of the count-and-say sequence.
 */

function countAndSay(n: number): string {
    // Base case
    if (n === 1) {
        return "1";
    }
    
    // Get previous sequence
    const prevSequence = countAndSay(n - 1);
    
    // Generate new sequence using RLE
    let result = "";
    let count = 1;
    let currentChar = prevSequence[0];
    
    for (let i = 1; i < prevSequence.length; i++) {
        if (prevSequence[i] === currentChar) {
            // If current character is the same as previous, increment count
            count++;
        } else {
            // Otherwise, add the count and character to result, then reset
            result += count.toString() + currentChar;
            currentChar = prevSequence[i];
            count = 1;
        }
    }
    
    // Add the last group
    result += count.toString() + currentChar;
    
    return result;
}