function get(key) {
    return sourceObject[key]
}

function set(key, value) {
    if (key in sourceObject) {
        sourceObject[key] = value
        return sourceObject[key]
    } else {
        return value
    }
}