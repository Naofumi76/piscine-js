function retry(count=3, callback = async () => {}) {
    return async function (...args) {
        let attempts = 0
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

async function failingCallback() {
    console.log('Attempt...')
    throw new Error('Failure')
}

async function successfulCallback() {
    console.log('Processing...')
    return new Promise((resolve) => setTimeout(() => resolve('Success'), 500))
}

const retryWith3Attempts = retry(3, failingCallback)
retryWith3Attempts().catch(console.error);


const timeoutWith1Sec = timeout(1000, successfulCallback)
timeoutWith1Sec().then(console.log).catch(console.error)

const timeoutWith500ms = timeout(500, successfulCallback)
timeoutWith500ms().then(console.log).catch(console.error)
