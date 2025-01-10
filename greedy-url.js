function getURL(str) {
    //var reg = /(https?:\/\/[^\s]+)/g

    // This regex allows us to get the url starting with http or https, with all their query parameters.
    var reg = /https?:\/\/[^\s?]+(?:\?([^#\s]*))?/g
    var tabURL = str.match(reg)
    if (!tabURL) {
        return []
    }
    return tabURL
}

function greedyQuery(str) {
    var tabURL = getURL(str)
    var result = []
    for (var i = 0; i < tabURL.length; i++) {
        var query = tabURL[i].match(/\?([^#\s]*)/)
        if (query && query[1]) {
            var params = query[1].split('&')
            if (params.length >= 3) {
                result.push(tabURL[i])
            }
        } 
    }
    return result
}

function notSoGreedy(str) {
    var tabURL = getURL(str)
    var result = []
    for (var i = 0; i < tabURL.length; i++) {
        var query = tabURL[i].match(/\?([^#\s]*)/)
        if (query && query[1]) {
            var params = query[1].split('&')
            if (params.length >= 2 && params.length <= 3) {
                result.push(tabURL[i])
            }
        } 
    }
    return result
}

const dataset = `
    http://example.com
    https://example.com?param1=value1
    https://example.org?param1=value1&param2=value2&param3=value3
    https://example.net?param1=value1&param2=value2&param3=value3&param4=value4&param5=value5
    qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you
`;

console.log(getURL(dataset));
console.log(greedyQuery(dataset));
console.log(notSoGreedy(dataset));