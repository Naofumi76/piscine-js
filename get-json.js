async function getJSON(path='', params={}) {
    var url = path + '?'
    if (params) {
        url += Object.keys(params).map(key => key + '=' + params[key]).join('&')
    }
    var result = await fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json()
    })
    if (result.error) {
        throw new Error(result.error)
    }
    return result.data
}