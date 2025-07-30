function countUniqueVowels(str) {
  const vowels = new Set();
  for (let char of str.toLowerCase()) {
    if ("aeiou".includes(char)) {
      vowels.add(char);
    }
  }
  return vowels.size;
}

// Example
console.log(countUniqueVowels("Hello World")); // Output: 2 ('e', 'o')
