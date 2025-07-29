function groupAnagrams(words) {
    let map = new Map();

    for (let word of words) {
        // Sort the word to use as a key
        let sorted = word.split('').sort().join('');

        // If the key already exists, push the word to its array
        if (map.has(sorted)) {
            map.get(sorted).push(word);
        } else {
            map.set(sorted, [word]);
        }
    }

    // Convert the map values to an array of arrays
    return Array.from(map.values());
}

let arr = ["cat", "tac", "act", "bat", "tab"];
let res = groupAnagrams(arr);
console.log(res);
