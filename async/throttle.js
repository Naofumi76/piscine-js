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


function opThrottle(fn, delay, { leading = false, trailing = true } = {}) {
    var last = 0
    var timer = null
    return function () {
        var now = new Date()
        if (!last && leading === false) {
            last = now
        }
        if (now - last > delay) {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            fn.apply(this, arguments)
            last = now
        } else if (!timer && trailing !== false) {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                last = new Date()
                timer = null
            }, delay)
        }
    };
}

const throttledLog = throttle(
    (message) => {
      console.log(message, Date.now());
    },
    2000,
    { leading: true, trailing: true }
  );

throttledLog("Message 1"); // Exécuté immédiatement (leading)
throttledLog("Message 2"); // Ignoré
setTimeout(() => throttledLog("Message 3"), 2500); // Exécuté après 2.5 secondes (trailing)

/* function printing() {
    console.log("Printing!")
}

var throttleTest = throttle(printing, 1000)
throttleTest()
throttleTest()
throttleTest()
throttleTest() */