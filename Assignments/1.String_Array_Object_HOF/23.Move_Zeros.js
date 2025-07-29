function moveZeros(arr) {
    const nonZeros = arr.filter(num => num !== 0);
    const zeros = Array(arr.length - nonZeros.length).fill(0);
    const result = nonZeros.concat(zeros);
    console.log(...result);
}

// 🔽 Hardcoded single test case
const arr = [0, 1, 2, 0];
moveZeros(arr);  // Output: 1 2 0 0
