/**
 * Given a function fn, an array of arguments args, 
 * and a timeout t in milliseconds, return a cancel function cancelFn.
 * After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
 * setTimeout(cancelFn, cancelTimeMs)
 * Initially, the execution of the function fn should be delayed by t milliseconds.
 * If, before the delay of t milliseconds, the function cancelFn is invoked, 
 * it should cancel the delayed execution of fn. Otherwise, 
 * if cancelFn is not invoked within the specified delay t, 
 * fn should be executed with the provided args as arguments.
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue};

type Fn = (...args: JSONValue[]) => void

function cancellable1(fn: Fn, args: JSONValue[], t: number): Function {

    const timeoutId = setTimeout(() => {
        fn(...args);
    }, t);

    //return cancel function
    return function() {
        clearTimeout(timeoutId);
    }

}