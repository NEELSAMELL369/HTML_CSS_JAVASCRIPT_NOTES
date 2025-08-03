function multiply(a, b) {
  return a * b;
}


let obj1 = {}
const result = multiply.apply(obj1, [4, 5]); // apply used directly
console.log(result); // Output: 20
