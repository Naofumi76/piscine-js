// Get
console.log('---------- Get ----------')

const src = { nested: {key: 'peekaboo'}}
const path = 'nested.key'
const path2 = 'test'

console.log(get(src, path))
console.log(get(src, path2))

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