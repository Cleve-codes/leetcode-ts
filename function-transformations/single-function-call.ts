/**
 * Given a function fn, return a new function that is identical to the original function
 * except that it ensures fn is called at most once.
 * The first time the returned function is called, it should return the same result as fn
 * Every subsequent time it is called, it should return undefined.
 */

type JSONValue2 = null | boolean | number | string | JSONValue2[] | { [key: string]: JSONValue2 };
type OnceFn = (...args: JSONValue2[]) => JSONValue2 | undefined;



function once(fn: (...args: JSONValue2[]) => JSONValue2): OnceFn {
    let called = false;

    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        } else {
            return undefined;
        }
    }
}