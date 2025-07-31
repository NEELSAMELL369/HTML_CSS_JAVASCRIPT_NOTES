function isHappy(n) {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = String(n).split('').map(d => Number(d) ** 2).reduce((a, b) => a + b, 0);
    }

    return n === 1;
}

// 🔢 Hardcoded single input
const n = 19;

if (isHappy(n)) {
    console.log("Yes");
} else {    
    console.log("No");
}
