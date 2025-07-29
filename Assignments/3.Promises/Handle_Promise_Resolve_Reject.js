function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve("✅ Number is positive: " + num);
        } else {
            reject("❌ Number must be positive");
        }
    });
}

async function checkValue(num) {
    try {
        const message = await checkNumber(num);
        console.log(message);
    } catch (err) {
        console.error(err);
    }
}

checkValue(10);  // ✅ Number is positive: 10
checkValue(-5);  // ❌ Number must be positive
