function indexOf(arr, target, start=0) {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

function lastIndexOf(arr, target, start=arr.length-1) {
    
    for (let i =start; i>= 0; i--) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

function includes(arr, target) {
    if (indexOf(arr, target) !== -1) {
        return true
    } else {
        return false
    }
}