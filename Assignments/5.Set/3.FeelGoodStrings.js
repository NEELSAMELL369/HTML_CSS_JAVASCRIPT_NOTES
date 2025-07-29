function checkVowelMood(n, s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowelCount = 0;

    for (let ch of s.toLowerCase()) {
        if (vowels.has(ch)) {
            vowelCount++;
        }
    }

    if (vowelCount >= Math.floor(n / 2)) {
        console.log("Feel good!");
    } else {
        console.log("Feel bad!");
    }
}

// Example usage
let n = 6;
let s = "uuuu";
checkVowelMood(n, s); // Output: "Feel good!"
