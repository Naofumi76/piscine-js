function slice(str, start=0, end=str.length) {
    var result
    if (typeof str==='string') {
        result = ""
    } else if (Array.isArray(str)) {
        result = []
    } else {
        throw new Error('Input must be a string or an array')
    }
    if (start < 0) {
        start = str.length + start
    }
    if (end < 0) {
        end = str.length + end
    }

    start = Math.max(0, start)
    end = Math.min(str.length, end)
    for (let i = start; i < end; i++) {
        if (Array.isArray(str)) {
            result.push(str[i]);
        } else {
            result += str[i];
        }
    }
    return result
}
