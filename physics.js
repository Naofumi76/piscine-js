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
