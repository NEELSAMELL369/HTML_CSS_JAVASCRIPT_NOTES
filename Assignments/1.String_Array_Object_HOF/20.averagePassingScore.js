function averagePassingScore(scores) {
  const passingScores = scores.map((score) => score.marks).filter((marks) => marks >= 40);

  if (passingScores.length === 0) return 0;

  const total = passingScores.reduce((acc, val) => acc + val, 0);
  return total / passingScores.length;
}

let scores = [
  { name: "A", marks: 35 },
  { name: "B", marks: 65 },
  { name: "C", marks: 85 },
  { name: "D", marks: 42 },
];

let res = averagePassingScore(scores);
console.log(res); // Output: 64
