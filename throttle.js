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

function opThrottle(func, delay, trailing, leading) {
    if (trailing) {
        let debounceTimer
        return function () {
            const context = this
            const args = arguments
            if (!trailing) {
                if (leading) {
                    func.apply(context, args)
                }
                clearTimeout(debounceTimer)
                debounceTimer = setTimeout(() => func.apply(context, args), delay)
            }
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