const isArray = (arr) => {
  return Array.isArray(arr);
};


let arr = [1, 2, 3]
console.log(isArray(arr)); // true
console.log(isArray("hello"));   // false
