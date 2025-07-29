function doubleNumbers(input) {
    // Split the input string into an array of numbers
    let numbers = input.split(' ').map(Number);

    // Use map to double each number
    let doubled = numbers.map(num => num * 2);

    // Display the result
    console.log(doubled.join(', '));
}

// Example usage
let input1 = "1 2 3 4";
doubleNumbers(input1); // Expected Output: 2, 4, 6, 8



function filterEvenNumbers(input) {
    // Split the input string into an array of numbers
    let numbers = input.split(',').map(Number);

    // Use filter to get even numbers
    let evenNumbers = numbers.filter(num => num % 2 === 0);

    // Display the result
    console.log(evenNumbers.join(', '));
}

// Example usage
let input2 = "1, 2, 3, 4, 5";
filterEvenNumbers(input2); // Expected Output: 2, 4



function sumNumbers(input) {
    // Split the input string into an array of numbers
    let numbers = input.split(';').map(Number);

    // Use reduce to calculate the sum
    let sum = numbers.reduce((acc, num) => acc + num, 0);

    // Display the result
    console.log(sum);
}

// Example usage
let input3 = "5; 10; 15";
sumNumbers(input3); // Expected Output: 30



function doubleNumbers(input) {
    if (!input) {
        console.log("Input is empty");
        return;
    }

    let numbers = input.split(' ').map(Number);

    // Check for any invalid numbers (NaN)
    if (numbers.some(isNaN)) {
        console.log("Invalid input. Please enter only numbers.");
        return;
    }

    let doubled = numbers.map(num => num * 2);
    console.log(doubled.join(', '));
}

// Example usage with error handling
doubleNumbers(""); // Output: Input is empty
doubleNumbers("1 2 a"); // Output: Invalid input. Please enter only numbers.












