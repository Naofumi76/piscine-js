function replica(targetObj, ...otherObj) {
    for (var obj of otherObj){
        if (obj && typeof obj === 'object') {
            for (var key of Object.keys(obj)) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] instanceof Date) {
                        targetObj[key] = new Date(obj[key])
                    } else if (obj[key] instanceof RegExp) {
                        targetObj[key] = new RegExp(obj[key])
                    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                        if (!targetObj[key] || typeof targetObj[key] !== 'object' || typeof targetObj[key] !== typeof obj[key]) {
                            targetObj[key] = Array.isArray(obj[key])? [] : {}
                        }
                        replica(targetObj[key], obj[key])
                    } else {
                        targetObj[key] = obj[key]
                    }
                }
            }
        }
    }
    return targetObj
}

console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }), { a: { b: 1, c: 23 } })

/* const result = replica(
    {},
    Object.freeze({ line: 'Replicants are like any other machine' }),
    Object.freeze({ author: 'Rich' })
);

console.log(result); */
