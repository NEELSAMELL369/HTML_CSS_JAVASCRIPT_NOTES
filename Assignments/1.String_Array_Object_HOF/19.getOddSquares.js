function getOddSquares(nums){

    return nums.filter((num)=> num%2 !==0).map((num)=> num * num).sort((a,b)=> a - b)

}

arr = [5, 2, 9, 4, 3]

res = getOddSquares(arr)
console.log(res)