function findLongestWord(str) {

  let arr = str.split(' ')
  let maxLen = 0
  let maxWord = ''
  arr.map((word) => {
    if (word.length > maxLen) {
      maxLen = word.length
      maxWord = word
    }
  })

  return maxWord


}

let str = "The quick brown fox jumps over the lazy dog"
console.log(findLongestWord(str));
// Output: "quick"
