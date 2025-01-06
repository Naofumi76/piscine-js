function get(key) {
    if (key in sourceObject) {
        return sourceObject[key]
    } else {
        return undefined
    }
}

function set(key, value) {
    if (key in sourceObject) {
        sourceObject[key] = value
        return sourceObject[key]
    } else {
        return value
    }
}