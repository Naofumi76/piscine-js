function interpolation({ step = 0, start =0, end=0, callback=()=>{}, duration =0} = {}) {
    var deltaX = (end - start) / step
    var actual = start
    var index = 0
    var timeout = setInterval(()=> {
        if (index < step) {
            clearInterval(timeout)
            return
        }
        actual += deltaX
        callback([actual.toFixed(2), index])
        index++
    }, duration/step)
}

/* function interpolation({ step = 0, start =0, end=0, callback=()=>{}, duration =0} = {}) {
    var deltaX = (end - start) / step
    var actual = start
    var index = 0
    var timeout = setInterval(()=> {
        if (index < step) {
            callback([actual, (duration / step) * (index+1)])
            current += deltaX
            index++
        }
        actual += deltaX
        callback([actual.toFixed(2), index])
        index++
    }, duration/step)
} */


interpolation({
    step: 5,
    start: 0,
    end: 1,
    duration: 10,
    callback: ([x, y]) => {
        console.log(`Point: [${x.toFixed(2)}, ${y.toFixed(2)}]`);
    }
});
