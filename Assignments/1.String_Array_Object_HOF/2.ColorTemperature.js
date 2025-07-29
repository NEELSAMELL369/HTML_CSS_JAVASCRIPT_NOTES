function colorTemperatures(temps) {
  return temps.map(temp => {
    if (temp < 20) return "green";
    else if (temp < 35) return "yellow";
    else return "red";
  });
}

// Example
let arr = [15, 22, 38]
console.log(colorTemperatures(arr)); // Output: ['green', 'yellow', 'red']
