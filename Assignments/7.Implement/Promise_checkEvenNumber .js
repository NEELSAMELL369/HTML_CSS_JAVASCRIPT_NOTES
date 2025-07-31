function checkEvenNumber(number) {
    return new Promise((resolve, reject) => {
        // Validate if it's a number and even
        if (typeof number === "number" && number % 2 === 0) {
            resolve(`${number} is even`);
        } else {
            reject(`${number} is odd or invalid`);
        }
    });
}

// ✅ Testing the function
checkEvenNumber(4)
    .then(console.log)   // Expected Output: "4 is even"
    .catch(console.error);

checkEvenNumber(5)
    .then(console.log)
    .catch(console.error);  // Expected Output: "5 is odd or invalid"
