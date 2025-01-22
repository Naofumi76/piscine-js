function interpolation({ step, start, end, callback, duration } = {}) {
    if (step <= 0) {
        throw new Error("Step must be greater than 0");
    }
    if (duration <= 0) {
        throw new Error("Duration must be greater than 0");
    }
    const interval = duration / step
    const deltaX = (end - start) / step
    for (let i = 0; i < step; i++) {
        const x = start + i * deltaX
        const y = i * interval
        setTimeout(() => {
            callback([x, y]);
        }, i * interval);
    }
}


interpolation({
    step: 5,
    start: 0,
    end: 1,
    duration: 10,
    callback: ([x, y]) => {
        console.log(`Point: [${x.toFixed(2)}, ${y.toFixed(2)}]`);
    }
});
