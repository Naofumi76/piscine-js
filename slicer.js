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
    for (let values in str) {
        if (values < start ) {
            continue
        } else if (values > end) {
            break
        }
        if (Array.isArray(str)) {
            result.push(str[values])
        } else {
            result += str[values]
        }
    }
    return result
}