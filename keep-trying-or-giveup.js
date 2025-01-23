function retry(count=3, callback = async () => {}) {
    return async function (...args) {
        try {
            return await callback(...args)
        } catch (e) {
            if (count > 0) {
                retry(count-1, callback)(...args)
            } else {
                throw e
            }
        }
    }
}

function timeout(delay=0, callback = async () => {}) {
    return async function (...args) {
        var timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error("timeout")), delay)
        })
        var callbackPromise = callback(...args)
        return Promise.race([callbackPromise, timeoutPromise])
    }
}