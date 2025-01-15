function get(src, path) {
    const keys = path.split('.');
    let current = src;
    for (let key of keys) {
        if (current[key] === undefined) {
            return undefined;
        }
        current = current[key];
    }
    return current;
}