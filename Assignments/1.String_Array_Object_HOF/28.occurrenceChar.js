const countCharacters = (arr) => {
  return arr.join('').split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
};

// Example
const input = ["abc", "bca", "cab"];
console.log(countCharacters(input));
// Output: { a: 3, b: 3, c: 3 }
