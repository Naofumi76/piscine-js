function retry(count=3, callback = async () => {}) {
    return async function (...args) {
        try {
            var result = await callback(...args)
            return result
        } catch (e) {
            if (count > 0) {
                return retry(count-1, callback)(...args)
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