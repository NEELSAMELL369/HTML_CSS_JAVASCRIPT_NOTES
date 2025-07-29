function categorizeVoters(voters) {
    const result = {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0
    };

    voters.forEach(voter => {
        if (voter.age <= 20) {
            result.numYoungPeople++;
            if (voter.voted) {
                result.numYoungVotes++;
            }
        } else if (voter.age > 20 && voter.age <= 45) {
            result.numMidsPeople++;
            if (voter.voted) {
                result.numMidVotesPeople++;
            }
        } else if (voter.age > 45) {
            result.numOldsPeople++;
            if (voter.voted) {
                result.numOldVotesPeople++;
            }
        }
    });

    return result;
}

// Sample input
const voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false }
];

// Get the result
const output = categorizeVoters(voters);
console.log(output);

// {
//     numYoungVotes: 0,
//     numYoungPeople: 2,
//     numMidVotesPeople: 5,
//     numMidPeople: 8,
//     numOldVotesPeople: 2,
//     numOldPeople: 2
// }