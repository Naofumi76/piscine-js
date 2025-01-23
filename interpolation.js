function interpolation({ step = 0, start =0, end=0, callback=()=>{}, duration =0} = {}) {
    var deltaX = (end - start) / step
    var actual = start
    var index = 0
    var timeout = setInterval(()=> {
        if (index < step) {
            callback([actual, (duration / step) * (index+1)])
            actual += deltaX
            index++
        } else {
            clearInterval(timeout)
        }
    }, duration/step)
}


interpolation({
     step: 5, start: 0, end: 4, duration: 50 ,
    callback: ([x, y]) => {
        console.log(`Point: [${x}, ${y}]`);
    }
});
