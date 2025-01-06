const escapeStr = "` , \\ , / , \" and '"
const arr = [4, '2']
const obj = { str: "Chaine", num: 2, bool: true, undef:undefined}
const nested = { arr:[4, undefined, '2'], obj: {str:"Chaine", num: 2, bool: true}}
nested = Object.freeze(nested)
arr = Object.freeze(arr)
obj = Object.freeze(obj)