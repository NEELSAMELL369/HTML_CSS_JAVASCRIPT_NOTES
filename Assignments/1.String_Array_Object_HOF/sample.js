Array.prototype.CustomFilter = function (preditator) {
    let res = []

    for (let i = 0; i < this.length; i++) {
        if (preditator(this[i], i, this)) {
            res.push(this[i])
        }

    }

    return res
}
let arr = [1, 2, 3, 4, 5]
console.log(arr.CustomFilter((num) => num % 2 == 0  ))