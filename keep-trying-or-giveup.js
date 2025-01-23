function retry(count, callback) {
    return async function (...args) {
        let attempts = 0
        while (true) {
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

function timeout(delay, callback) {
    return async function (...args) {
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error), delay)
        })
        const callbackPromise = callback(...args)
        return Promise.race([callbackPromise, timeoutPromise])
    }
}

// Simulate a failing async function for retry testing
async function failingCallback() {
    console.log('Attempt...')
    throw new Error('Failure')
}

// Simulate a successful async function for timeout testing
async function successfulCallback() {
    console.log('Processing...')
    return new Promise((resolve) => setTimeout(() => resolve('Success'), 500))
}

// Retry Example
const retryWith3Attempts = retry(3, failingCallback)
retryWith3Attempts().catch(console.error); // Max retry attempts reached

// Timeout Example
const timeoutWith1Sec = timeout(1000, successfulCallback)
timeoutWith1Sec().then(console.log).catch(console.error) // Success

const timeoutWith500ms = timeout(500, successfulCallback)
timeoutWith500ms().then(console.log).catch(console.error) // timeout
