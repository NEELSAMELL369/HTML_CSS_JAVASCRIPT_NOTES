function extractSteps(sentence) {
  const parts = sentence.split(/[,!]/); // Split by comma or exclamation
  const result = {};

  parts.forEach(part => {
    const lower = part.toLowerCase().trim(); // Normalize
    
    if (lower.includes("step")) {
      const words = lower.split(" ");
      let action = "";
      let count = 0;

      for (let i = 0; i < words.length; i++) {
        if (words[i] === "step" || words[i] === "steps") {
          count = Number(words[i - 1]); // Number before 'steps'
          action = words[i - 2];        // Word before number is action
          break;
        }
      }

      if (action) {
        result[action] = (result[action] || 0) + count;
      }
    }
  });

  return result;
}
    
// Test
const input = "Run 45 steps, then Jump 30 STEPS, finally run 25 Steps!";
console.log(extractSteps(input)); // Output: { run: 70, jump: 30 }
