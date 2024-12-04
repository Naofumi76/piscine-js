// Is
console.log('---------- Is ----------')

const is = {}

is.num = function num(x) {
    return typeof x === 'number' && !Number.isNaN(x);
}
is.nan = function nan(x) {
    return Number.isNaN(x)
}
is.str = function str(x) {
    return typeof x ==='string'
}
is.bool = function bool(x) {
    return typeof x === 'boolean'
}
is.undef = function undef(x) {
    return x === undefined
}
is.def = function def(x) {
    return x!== undefined
}
is.arr = function arr(x) {
    return Array.isArray(x)
}
is.obj = function obj(x) {
    return typeof x === 'object' && x !== null && !Array.isArray(x);
}
is.fun = function fun(x) {
    return typeof x === 'function'
}
is.truthy = function truthy(x) {
    return!!x
}
is.falsy = function falsy(x) {
    return!x
}

console.log(is.num(5));
console.log(is.num(NaN));
console.log(is.nan(NaN));
console.log(is.str('hello'));
console.log(is.bool(true));
console.log(is.undef(undefined));
console.log(is.def(null));
console.log(is.arr([]));
console.log(is.obj({}));
console.log(is.obj([]));
console.log(is.fun(function() {}));
console.log(is.truthy(1));
console.log(is.falsy(0));
