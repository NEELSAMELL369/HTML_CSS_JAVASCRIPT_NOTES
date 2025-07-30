
function extractLeafValues(arr) {
    const result = {};

    function traverse(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                traverse(obj[key]);
            } else {
                result[key] = obj[key];
            }
        }
    }

    arr.forEach(item => traverse(item));
    return result;
}

const arr = [
    { a: 1, b: 2 },
    { c: 3 },
    { d: { e: 4 }, f: { g: { h: 4 } }, i: 5 }
];

console.log(extractLeafValues(arr));


// { a: 1, b: 2, c: 3, e: 4, h: 4, i: 5 }
