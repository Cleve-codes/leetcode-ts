/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

function isPalindrome(x: number): boolean {
    // Edge Case 1: Negative numbers are not palindromes
    if (x < 0) {
        return false;
    }

    // Edge Case 2: Numbers ending in 0 (except 0 itself) are not palindromes
    if (x % 10 === 0 && x !== 0) {
        return false;
    }

    let reversedHalf = 0;
    let originalX = x; // Keep a copy if needed, or modify x directly

    // Reverse the second half of the number
    while (originalX > reversedHalf) {
        const lastDigit = originalX % 10;
        reversedHalf = reversedHalf * 10 + lastDigit;
        originalX = Math.floor(originalX / 10); // Use Math.floor for integer division
    }
    

    // Compare the first half (remaining originalX) with the reversed second half
    // For odd length numbers, the middle digit is in originalX,
    // so we can ignore it by checking reversedHalf / 10
    return originalX === reversedHalf || originalX === Math.floor(reversedHalf / 10);
}



