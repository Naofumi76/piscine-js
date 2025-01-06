function blockChain(data, prev) {
    if (prev === undefined) {
        prev = { index: 0, hash: '0' }
    }
    const index = prev.index+1
    const hashString = `${index}${prev.hash}${JSON.stringify(data)}`
    const hash = hashCode(hashString)
    return {
        index,
        data,
        hash,
        prev,
        chain(data) {
            return blockChain(data, this)
        }
    }
}