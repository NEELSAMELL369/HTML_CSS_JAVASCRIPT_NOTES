function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count += 1;
      return count;
    },
    getCount: function () {
      return count;
    }
  };
}

// Usage
const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2

// console.log(counter.count); // undefined (count is private)
