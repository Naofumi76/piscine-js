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

function opThrottle(func, delay, { leading , trailing } = {}) {
    if (!leading && !trailing) {
        return throttle(func, delay)
    } else {
        if (leading) {
            func.apply(this, arguments)
        }
        if (trailing) {
            setTimeout(() => func.apply(this, arguments), delay)
        }
    }
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