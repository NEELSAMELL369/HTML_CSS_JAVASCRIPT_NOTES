const flattenNestedArray = (arr) => {

    const flatten = (obj) => {
        const result = {};
        const extractValues = (o) => {
            for (let key in o) {
                if (typeof o[key] === 'object') {
                    extractValues(o[key]);
                } else {
                    result[key] = o[key];
                }
            }
        };
        extractValues(obj);
        return result;
    };

    return arr.map(item => flatten(item));
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


