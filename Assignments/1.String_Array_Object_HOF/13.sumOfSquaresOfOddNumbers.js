function sumOfSquaresOfOddNumbers(numbers) {
  return numbers
    .filter(num => num % 2 !== 0)  // Filter odd numbers
    .map(num => num * num)         // Square each odd number
    .reduce((acc, num) => acc + num, 0); // Sum up the squares
}

const numbers = [1, 2, 3, 4, 5, 7];
console.log(sumOfSquaresOfOddNumbers(numbers)); // Output: 84
