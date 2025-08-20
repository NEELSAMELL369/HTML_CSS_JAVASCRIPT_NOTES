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


//---------------------------------------------------------TypeScript-----------------------------------------------------

// type User = {
//     user: string;
//     age: number;
// };

// type AgeGroups = {
//     [age: number]: string[];
// };

// function groupUsersByAge(arr: User[]): AgeGroups {
//     let ageGroup: AgeGroups = {};

//     arr.forEach((data) => {
//         if (!ageGroup[data.age]) {
//             ageGroup[data.age] = [];
//         }
//         ageGroup[data.age].push(data.user);
//     });

//     return ageGroup;
// }

// const arr: User[] = [
//     { user: "Alice", age: 25 },
//     { user: "Bob", age: 30 },
//     { user: "Charlie", age: 25 },
//     { user: "David", age: 30 },
//     { user: "Eve", age: 35 }
// ];

// console.log(groupUsersByAge(arr));
