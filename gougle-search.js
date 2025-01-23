async function queryServers(serverName, q) {
    var newServerName = serverName.replaceAll(' ', '+')
    var newQ = q.replaceAll(' ', '+')
    var urlServ = `http://${newServerName}?q=${newQ}` 
    var urlBackup = `http://${newServerName}_backup?q=${newQ}`
    return await Promise.race([getJSON(urlServ), getJSON(urlBackup)])
}

async function gougleSearch(q) {
    var servers = ["image", "video", "web"]
    var timeout = new Promise((resolve) =>
        setTimeout(resolve, 80, Error('timeout'))
    )
    var result = []
    var works 
    for (var server of servers) {
        works = await Promise.race(timeout, queryServers(server, q))
        if (works instanceof Error) {
            return works
        }
        result.push(works)
    }
    return {image: result[0], video: result[1], url: result[2]}
}