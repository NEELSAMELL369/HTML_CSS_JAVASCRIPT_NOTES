const task1 = new Promise(resolve => setTimeout(() => resolve("Task 1"), 1000));
const task2 = new Promise(resolve => setTimeout(() => resolve("Task 2"), 1500));
const task3 = new Promise(resolve => setTimeout(() => resolve("Task 3"), 500));

async function runTasks() {
  try {
    const results = await Promise.all([task1, task2, task3]);
    console.log("✅ All tasks completed:", results);
  } catch (err) {
    console.error("❌ One of the tasks failed:", err);
  }
}

runTasks();
