/**
 * A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).
 * For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime.
 * However, "3245" is not good because 3 is at an even index but is not even.
 * Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.
 * A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.
 */

const MOD = 1_000_000_007n;

/**
 * Calculates (base^exp) % MOD using modular exponentiation.
 * Uses BigInt to handle potentially large numbers safely.
 * @param base The base of the exponentiation.
 * @param exp The exponent.
 * @returns (base^exp) % MOD as a BigInt.
 */
function power(base: bigint, exp: bigint): bigint {
    let res = 1n;
    base %= MOD; // Reduce base modulo MOD initially

    while (exp > 0n) {
        // If exponent is odd, multiply the current base with the result
        if (exp % 2n === 1n) {
            res = (res * base) % MOD;
        }
        // Now exponent must be even (or was just made even by subtracting 1 implicitly)
        // Divide the exponent by 2
        exp >>= 1n; // Equivalent to exp = exp / 2n
        // Square the base
        base = (base * base) % MOD;
    }
    return res;
}

function countGoodNumbers(n: number): number {
    // Convert n to BigInt for calculations involving potentially large exponents
    const nBigInt = BigInt(n);

    // Calculate the number of even indices: ceil(n / 2)
    // Using BigInt division: (n + 1) / 2 gives ceiling for positive n
    const evenCount = (nBigInt + 1n) / 2n;

    // Calculate the number of odd indices: floor(n / 2)
    // Using BigInt division: n / 2 gives floor
    const oddCount = nBigInt / 2n;

    // Calculate 5^evenCount % MOD
    // There are 5 choices (0, 2, 4, 6, 8) for even positions
    const countForEven = power(5n, evenCount);

    // Calculate 4^oddCount % MOD
    // There are 4 choices (2, 3, 5, 7) for odd positions
    const countForOdd = power(4n, oddCount);

    // Total combinations = (countForEven * countForOdd) % MOD
    const totalCount = (countForEven * countForOdd) % MOD;

    // The function expects a number as return type, so convert the final BigInt result
    return Number(totalCount);
}