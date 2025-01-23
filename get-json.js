async function getJSON(path='', params={}) {
    var url = path + '?'
    for (var key in params) {
        url += key.replace(' ', '+') + '=' + params[key].replace(' ', '+') + '&'
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