const n = 6;
const arr = [1,2,3,4,2,1,6,5];

// Get unique sorted values
const uniqueValues = [...new Set(arr)].sort((a, b) => a - b);

// Check for less than 3 unique values
if (uniqueValues.length < 3) {
    console.log("Not Possible");
} else {
    console.log(uniqueValues.slice(0, 3).join(" "));
}

if (uniqueValues.length < 3) {
    console.log("Not Possible");
} else {
    console.log(uniqueValues.slice(-3).join(" "));
}
