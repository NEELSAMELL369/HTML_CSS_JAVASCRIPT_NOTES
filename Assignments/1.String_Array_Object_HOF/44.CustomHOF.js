Array.prototype.customMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

Array.prototype.customFilter = function(predicate) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (predicate(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

Array.prototype.customReduce = function(reducer, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < this.length; i++) {
        accumulator = reducer(accumulator, this[i], i, this);
    }
    
    return accumulator;
};

// Example usage:
const arr = [1, 2, 3, 4, 5];

// Using customMap
console.log(arr.customMap(x => x * 2)); // Output: [2, 4, 6, 8, 10]

// Using customFilter
console.log(arr.customFilter(x => x % 2 === 0)); // Output: [2, 4]

// Using customReduce
console.log(arr.customReduce((acc, cur) => acc + cur, 0)); // Output: 15
