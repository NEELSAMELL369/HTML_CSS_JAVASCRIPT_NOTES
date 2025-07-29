function changeArray(arr) {
    const low = Math.min(...arr);
    return arr.map(x => x % low === 0 ? -1 : x);
}

// Hardcoded single test case
const n = 3;
const arr = [1,2,3];

const res = changeArray(arr);
console.log(...res); // Output: -1 -1 -1 
