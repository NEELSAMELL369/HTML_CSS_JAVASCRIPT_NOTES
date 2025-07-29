function canPourIntoTwoBuckets(a, b) {
    const totalWater = a.reduce((sum, val) => sum + val, 0);

    // Find two largest values in b
    const sortedB = [...b].sort((x, y) => y - x); // Sort descending
    const max1 = sortedB[0];
    const max2 = sortedB[1];

    if (totalWater <= max1 + max2) {
        return "YES";
    } else {
        return "NO";
    }
}

// Example input
const a = [3, 5];
const b = [3, 6];

const res = canPourIntoTwoBuckets(a, b);
console.log(res);
