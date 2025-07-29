function groupUsersByAge(users) {
    const grouped = {};

    for (let { user, age } of users) {
        if (!grouped[age]) {
            grouped[age] = [];
        }
        grouped[age].push(user);
    }

    return grouped;
}
const input = [
    { user: "Alice", age: 25 },
    { user: "Bob", age: 30 },
    { user: "Charlie", age: 25 },
    { user: "David", age: 30 },
    { user: "Eve", age: 35 }
];

console.log(groupUsersByAge(input));
