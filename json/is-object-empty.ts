/**
 * Given an object or an array, return if it is empty.
 * An empty object contains no key-value pairs.
 * An empty array contains no elements.
 * You may assume the object or array is the output of JSON.parse.
 */

type JSONValue1 = null | boolean | number | string | JSONValue1[] | { [key: string]: JSONValue1 }

type Obj1 = Record<string, JSONValue1> | JSONValue1[]

function isEmpty(obj: Obj1): boolean {
    return Object.keys(obj).length === 0
}

