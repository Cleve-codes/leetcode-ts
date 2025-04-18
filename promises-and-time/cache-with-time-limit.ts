/**
 * Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
 * The class has three public methods:
 * set(key, value, duration): accepts an integer key, 
 *  an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible.
 * The method should return true if the same un-expired key already exists and false otherwise.
 * Both the value and duration should be overwritten if the key already exists.
 * get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
 * count(): returns the count of un-expired keys.
 */

class TimeLimitedCache {
    private cache: Map<number, { value: number, expiresAt: number }>;
    
    constructor() {
        this.cache = new Map();
    }
    
    set(key: number, value: number, duration: number): boolean {
        const now = Date.now();
        const exists = this.cache.has(key) && this.cache.get(key)!.expiresAt > now;
        
        this.cache.set(key, {
            value,
            expiresAt: now + duration
        });
        
        return exists;
    }
    
    get(key: number): number {
        const now = Date.now();
        const item = this.cache.get(key);
        
        if (item && item.expiresAt > now) {
            return item.value;
        }
        
        return -1;
    }
    
    count(): number {
        const now = Date.now();
        let count = 0;
        
        for (const item of this.cache.values()) {
            if (item.expiresAt > now) {
                count++;
            }
        }
        
        return count;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */