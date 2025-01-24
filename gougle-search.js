async function queryServers(serverName, q) {
    var urlServ = getJSON(`/${serverName}?q=${q}`)
    var urlBackup = getJSON(`/${serverName}_backup?q=${q}`)
    return await Promise.race([urlServ, urlBackup])
}

async function gougleSearch(q) {
    var servers = ["image", "video", "web"]
    var timeout = new Promise((resolve) =>
        setTimeout(resolve, 80, Error('timeout'))
    )
    var result = []
    var works 
    for (var server of servers) {
        works = await Promise.race([timeout, queryServers(server, q)])
        if (works instanceof Error) {
            throw works
        }
        result.push(works)
    }
    return {image: result[0], web: result[2], video: result[1]}
}