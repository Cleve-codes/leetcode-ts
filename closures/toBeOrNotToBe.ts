type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (expectedVal: any): boolean => {
            if (val === expectedVal) {
                return true;
            } else {
                throw new Error("Not Equal")
            }
        },
        notToBe: (expectedVal: any): boolean => {
            if (val !== expectedVal){
                return true;
            } else {
                throw new Error('Equal')
            }
        }
    }
}

// Example usage:
try {
    console.log("Testing expect(5).toBe(5)");
    expect(5).toBe(5); // This will pass and return true
    console.log("✅ Assertion Passed");

    console.log("\nTesting expect(5).toBe(null)");
    expect(5).toBe(null); // This will throw an error
    console.log("✅ Assertion Passed (This won't be printed)");

} catch (e: any) {
    console.error("❌ Assertion Failed:", e.message); // Catches "Not Equal"
}

try {
    console.log("\nTesting expect(5).notToBe(5)");
    expect(5).notToBe(5); // This will throw an error
    console.log("✅ Assertion Passed (This won't be printed)");

} catch (e: any) {
    console.error("❌ Assertion Failed:", e.message); // Catches "Equal"
}