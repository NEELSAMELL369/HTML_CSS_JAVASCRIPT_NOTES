// Task A
function startTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task A completed");
        }, 1000); // 1 second delay
    });
}

// Task B
function processTask(taskAResult) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Task B processed: ${taskAResult}`);
        }, 1500); // 1.5 seconds delay
    });
}

// Task C
function finalizeTask(taskBResult) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Final result: ${taskBResult}`);
        }, 500); // 0.5 seconds delay
    });
}

// ✅ Chaining Promises
startTask()
    .then((resultA) => {
        console.log(resultA); // Logs: Task A completed
        return processTask(resultA);
    })
    .then((resultB) => {
        console.log(resultB); // Logs: Task B processed: Task A completed
        return finalizeTask(resultB);
    })
    .then((finalResult) => {
        console.log(finalResult); // Logs: Final result: Task B processed: Task A completed
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
