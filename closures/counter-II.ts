/**
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
 * The three functions are:
 * increment() increases the current value by 1 and then returns it.
 * decrement() reduces the current value by 1 and then returns it.
 * reset() sets the current value to init and then returns it.
 */

type Counter = {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
}

function createCounter2(init: number): Counter {
    let currentCount = init;

    return {
        increment: (): number => {
            return ++currentCount;
        },
        decrement: (): number => {
            return --currentCount;
        },
        reset: (): number => {
            return currentCount = init;
        }
    }
}