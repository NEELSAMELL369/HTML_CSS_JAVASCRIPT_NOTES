// Custom implementation of includes
function customIncludes(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
}

let arr1 = [1, 2, 3, 4, 5];
console.log("customIncludes:", customIncludes(arr1, 9)); // true
console.log("customIncludes:", customIncludes(arr1, 3)); // false


function customPop(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return undefined; // Return undefined if array is empty, like the native pop()
  }

  // Store the last element in a variable
  const lastElement = arr[arr.length - 1];

  // Reduce the array length by 1 to remove the last element
  arr.length = arr.length - 1;

  // Return the removed element
  return lastElement;
}

// Example usage:
let myArray = [1, 2, 3, 4];
console.log(customPop(myArray)); // Output: 4
console.log(myArray); // Output: [1, 2, 3]


// Custom implementation of push
function customPush(arr, ...elements) {
  for (let i = 0; i < elements.length; i++) {
    arr[arr.length] = elements[i]; // manually add each element to end of array
  }
  return arr.length; // return new length of array (same as native push)
}

// Define the initial array
let arr2 = [1, 2, 9, 10, 5];

console.log("customPush:", customPush(arr2, 6, 7)); // Output: 7
console.log("Array after customPush:", arr2);       // Output: [1, 2, 9, 10, 5, 6, 7]


// Custom implementation of slice
function customSlice(arr, start, end) {
  let result = [];
  if (end === undefined) end = arr.length;

  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
}

let arr3 = [1, 2, 3, 4, 5];
console.log("customSlice:", customSlice(arr3, 1, 4)); // [2, 9, 10]


// Custom implementation of splice
function customSplice(arr, start, deleteCount, ...items) {
  let removed = [];
  let left = arr.slice(0, start);
  let right = arr.slice(start + deleteCount);

  // Collect removed items
  for (let i = start; i < start + deleteCount; i++) {
    if (arr[i] !== undefined) {
      removed.push(arr[i]);
    }
  }

  // Merge left part, new items, and right part
  arr.length = 0;
  arr.push(...left, ...items, ...right);

  return removed;
}

let arr = [1, 2, 3, 4, 5];
console.log("customSplice:", customSplice(arr, 2, 2, 9, 10)); // [3, 4]
console.log("Array after customSplice:", arr); // [1, 2, 9, 10, 5]



// Custom implementation of toLowerCase
function customToLowerCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // A-Z
      result += String.fromCharCode(charCode + 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

// Custom implementation of toUpperCase
function customToUpperCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
      // a-z
      result += String.fromCharCode(charCode - 32);
    } else {
      result += str[i];
    }

  }
  return result;
}

let str = "Hello World";
console.log("customToLowerCase:", customToLowerCase(str)); // "hello world"
console.log("customToUpperCase:", customToUpperCase(str)); // "HELLO WORLD"






Array.prototype.customMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

Array.prototype.customFilter = function (predicate) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.customReduce = function (reducer, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = reducer(accumulator, this[i], i, this);
  }

  return accumulator;
};

// Example usage:
const arr5 = [1, 2, 3, 4, 5];

// Using customMap
console.log(arr5.customMap(x => x * 2)); // Output: [2, 4, 6, 8, 10]

// Using customFilter
console.log(arr5.customFilter(x => x % 2 === 0)); // Output: [2, 4]

// Using customReduce
console.log(arr5.customReduce((acc, cur) => acc + cur, 0)); // Output: 15
