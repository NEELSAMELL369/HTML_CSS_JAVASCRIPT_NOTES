function timer(onComplete, duration) {
    setTimeout(() => {
        onComplete(`Timer of ${duration} ms to finish`)
    }, duration)
}

timer((res) => { console.log(res) }, 1000)