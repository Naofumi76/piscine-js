const escapeStr = "` , \\ , / , \" and '"
const arr = Object.freeze([4, '2'])
const obj = Object.freeze({ str: "Chaine", num: 2, bool: true, undef:undefined})
const nested = Object.freeze({ arr:[4, undefined, '2'], obj: {str:"Chaine", num: 2, bool: true}})

console.log(obj)
obj.str.update="TEST"
console.log(obj)