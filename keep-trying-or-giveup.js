function retry(count=3, callback = async () => {}) {
    return async function (...args) {
        let attempts = 0
        while (attempts < count) {
            try {
                return await callback(...args)
            } catch (error) {
                attempts++
                if (attempts > count) {
                    throw new Error
                }
            }
        }
    };
}

function timeout(delay=0, callback = async () => {}) {
    return async function (...args) {
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error), delay)
        })
        const callbackPromise = callback(...args)
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
