function throttle(func, delay) {
    let lastCall = 0
    return function () {
        const now = Date.now()
        if (now - lastCall > delay) {
            func.apply(this, arguments)
            lastCall = now
        }
    }
}

/* function printing() {
    console.log("Printing!")
}

var throttleTest = throttle(printing, 1000)
throttleTest()
throttleTest()
throttleTest()
throttleTest() */