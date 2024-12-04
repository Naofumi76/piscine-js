// Physics
console.log('---------- Physics ----------')

const obj = {
    f: 10,
    m: 5,
    Δv: 100,
    Δt: 50,
    t:1,
    d:10
}

function getAcceleration(obj) {
    if (typeof obj !== 'object') {
        throw new Error('Not an object')
    }
    if (obj.f !== undefined && obj.m !== undefined) {
        return obj.f / obj.m
    } else if (obj.Δv !== undefined && obj.Δv !== undefined) {
        return obj.Δv / obj.Δt
    } else if (obj.t !== undefined && obj.d !== undefined) { 
        return (obj.d*2) / (obj.t*obj.t)
    } else {
        return 'impossible'
    }
}

console.log(getAcceleration(obj))