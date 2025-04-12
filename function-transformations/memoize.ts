/**
 * Given a function fn, return a memoized version of that function.
 * A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
 * You can assume there are 3 possible input functions: sum, fib, and factorial.
 * sum accepts two integers a and b and returns a + b. 
 * Assume that if a value has already been cached for the arguments (b, a) 
 * where a != b, it cannot be used for the arguments (a, b). For example, 
 * if the arguments are (3, 2) and (2, 3), two separate calls should be made.
 * fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
 * fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
 */

type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
    // Use a Map for potentially better performance with non-string keys,
    // although string keys from JSON.stringify are fine here too.
    // Using Record<string, number> is also perfectly valid.
    const cache: Record<string, number> = {};

    return function(...args: number[]): number {
        // 1. Create a unique key for the arguments
        const key = JSON.stringify(args);

        // 3. Check if the key exists in the cache
        if (key in cache) {
            // 4. Cache Hit: Return the cached value
            return cache[key];
        } else {
            // 5. Cache Miss: Compute the result
            const result = fn(...args);
            // Store the result in the cache
            cache[key] = result;
            // Return the newly computed result
            return result;
        }
    }
}