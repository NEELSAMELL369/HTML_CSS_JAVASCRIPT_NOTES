const flattenNestedArray = (arr) => {
    const result = {};

    const extractValues = (obj) => {
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                extractValues(obj[key]); // Recursively flatten
            } else {
                result[key] = obj[key]; // Store key-value
            }
        }
    };

    arr.forEach(item => extractValues(item));
    return result;
};

const data = [
    {
        name: "Alice",
        info: {
            age: 25,
            location: {
                city: "Mumbai"
            }
        }
    },
    {
        name: "Bob",
        info: {
            age: 30,
            location: {
                city: "Delhi"
            }
        }
    }
];

console.log(flattenNestedArray(data));
// Output
// {
//   name: "Bob",
//   age: 30,
//   city: "Delhi"
// }
