const strings = [
    "Hello",
    "world",
    "this",
    "is",
    "an",
    "example",
    "array",
    "of",
    "strings"
];

const swapStrings = (arr) => {
    return arr.map(str => {
        if (str.length <= 1) return str; // Return the string as-is if it's 1 character or empty
        const firstChar = str[0];
        const lastChar = str[str.length - 1];
        return lastChar + str.slice(1, -1) + firstChar;
    });
};

console.log(swapStrings(strings));
// Output: ["oellH", "dorlw", "shit", "si", "na", "example", "yrraa", "fo", "strings"]
