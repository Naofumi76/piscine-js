const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log
}

function get(key) {
    if (key in sourceObject) {
        return sourceObject[key]
    } else {
        throw new Error(`Key "${key}" not found in sourceObject`)
    }
}

function set(key, value) {
    if (key in sourceObject) {
        sourceObject[key] = value
        return sourceObject[key]
    } else {
        throw new Error(`Key "${key}" not found in sourceObject`)
    }
}