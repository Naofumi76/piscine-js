function debounce(func, delay) {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
}

/* function printing() {
    console.log("Printing!")
}

var debouncedPrinting = debounce(printing, 1000)
debouncedPrinting()
debouncedPrinting = debounce(printing, 5000)
debouncedPrinting() */