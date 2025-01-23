function retry(count=3, callback = async () => {}) {
    return async function (...args) {
        while (true) {
            try {
                return await callback(...args)
            } catch (error) {
                if (count > 0) {
                    retry(count-1, callback)(...args)
                } else {
                    throw error
                }
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