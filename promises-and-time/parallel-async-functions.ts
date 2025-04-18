/**
 * Given an array of asynchronous functions functions, return a new promise promise. 
 * Each function in the array accepts no arguments and returns a promise. 
 * All the promises should be executed in parallel.
 * promise resolves:
 * When all the promises returned from functions were resolved successfully in parallel.
 * The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions.
 * The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
 * promise rejects:
 * When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
 * Please solve it without using the built-in Promise.all function.
 */

type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const results: T[] = new Array(functions.length);
        let resolvedCount = 0;
        
        // Handle the empty array case
        if (functions.length === 0) {
            resolve([]);
            return;
        }

        // Execute each function in parallel
        functions.forEach((fn, index) => {
            fn()
                .then((value) => {
                    // Store the result at the correct position
                    results[index] = value;
                    
                    // Increment the count of resolved promises
                    resolvedCount++;
                    
                    // If all promises have resolved, resolve the main promise
                    if (resolvedCount === functions.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    // If any promise rejects, immediately reject the main promise
                    reject(error);
                });
        });
    });
}