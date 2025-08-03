function startTask() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Task A Completed")
        }, 1000)
    })
}

function processTask() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`Task B Completed`)
        }, 1500)
    })
}

function finalizeTask() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`Task C Completed`)
        }, 500)
    })
}


startTask().then((res) => {
    console.log(res)
    return processTask(res)
}).then((res) => {
    console.log(res)
    return finalizeTask(res)
}).then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
})







