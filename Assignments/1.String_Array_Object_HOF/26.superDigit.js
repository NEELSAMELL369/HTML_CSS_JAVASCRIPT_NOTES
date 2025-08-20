function superDigit(n, k) {
    let total = n.split('').reduce((sum, d) => sum + Number(d), 0) * k;

    while (total >= 10) {
        total = String(total).split('').reduce((sum, d) => sum + Number(d), 0);
    }

    return total;
}

// 🔢 Hardcoded input
const n = "148";
const k = 3;

const result = superDigit(n, k);
console.log(result); // Output: 3


//Typescript

// function superDigit(n: string, k: number): number {
//     let total: number = n.split('').reduce((sum, d) => sum + Number(d), 0) * k;

//     while (total >= 10) {
//         total = String(total)
//             .split('')
//             .reduce((sum, d) => sum + Number(d), 0);
//     }

//     return total;
// }

// // 🔢 Hardcoded input
// const n: string = "148";
// const k: number = 3;

// const result: number = superDigit(n, k);
// console.log(result); // Output: 3
