function debounce(func, delay) {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
}

function opDebounce(func, delay, leading) {
    if (leading) {
        return debounce(func, 0)
    } else {
        return debounce(func, delay)
    }
}

function printing() {
    console.log("Printing!")
}

function debouncedPrinting() {
    console.log("Debounced printing!")
}

var debounceTest = debounce(printing, 1000)
debounceTest()
debounceTest = debounce(printing, 5000)
debounceTest()

var opDebounceTest = opDebounce(debouncedPrinting, 1000, true)
opDebounceTest()
opDebounceTest = opDebounce(debouncedPrinting, 5000, true)
opDebounceTest()