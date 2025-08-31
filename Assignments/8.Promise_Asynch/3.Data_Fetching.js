// Step 1: Simulate data fetching
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Generate random number between 0 and 1
            const randomNum = Math.random();

            if (randomNum > 0.5) {
                resolve("Fetched data successfully!");
            } else {
                reject("Error fetching data");
            }
        }, 1000); // Simulate network delay of 1 second
    });
}

// Step 2: Create async handler with error handling
async function fetchDataHandler() {
    try {
        const result = await fetchData();  // Wait until fetchData resolves
        console.log(result);               // Success case
    } catch (error) {
        console.error(error);              // Error case
    }
}

// Step 3: Call multiple times to observe both outcomes
fetchDataHandler();
fetchDataHandler();
fetchDataHandler();
