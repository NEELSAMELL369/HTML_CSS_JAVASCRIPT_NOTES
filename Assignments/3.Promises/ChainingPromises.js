function stepOne() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 1 Complete"), 1000);
  });
}

function stepTwo(previous) {
  return new Promise(resolve => {
    setTimeout(() => resolve(previous + " → Step 2 Complete"), 1000);
  });
}

function stepThree(previous) {
  return new Promise(resolve => {
    setTimeout(() => resolve(previous + " → Step 3 Complete"), 1000);
  });
}

async function runSteps() {
  try {
    const res1 = await stepOne();
    console.log(res1);

    const res2 = await stepTwo(res1);
    console.log(res2);

    const res3 = await stepThree(res2);
    console.log("✅ Final Result:", res3);
  } catch (err) {
    console.error("❌ Error in steps:", err);
  }
}

runSteps();
