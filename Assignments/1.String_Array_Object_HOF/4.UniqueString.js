function UniqueString(strings) {
    return strings.reduce((acc, str) => {
        acc[str] = (acc[str] || 0) + 1;
        return acc;
    }, {});
}

const strings = ["apple", "banana", "apple", "orange", "banana", "pear", "apple"];
console.log(UniqueString(strings));
// Output: { apple: 3, banana: 2, orange: 1, pear: 1 }
