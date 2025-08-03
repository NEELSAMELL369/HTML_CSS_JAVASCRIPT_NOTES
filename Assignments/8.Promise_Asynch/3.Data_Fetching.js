function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true
            if (success) {
                resolve("Fetched data successfully!");
            } else {
                reject("Server error: Unable to fetch data.");
            }
        }, 1000);
    });
}

async function fetchDataHandler() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

// Simulate workflow
fetchDataHandler();