/**
 * Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
 * After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
 * setTimeout(cancelFn, cancelTimeMs)
 * The function fn should be called with args immediately and then called again every t milliseconds 
 * until cancelFn is called at cancelTimeMs ms.
 */

type JSONValue2 = null | boolean | number | string | JSONValue2[] | { [key: string]: JSONValue2 };

type Fn2 = (...args: JSONValue2[]) => void;

function cancellable(fn: Fn2, args: JSONValue2[], t:number): Function {


    fn(...args);

    const intervalId = setInterval(() => {
        fn(...args)
    }, t)

    return function() {
        clearInterval(intervalId);
    }

}

