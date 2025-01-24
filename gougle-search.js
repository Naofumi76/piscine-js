async function queryServers(serverName, q) {
    var urlServ = `/${serverName}?q=${q}` 
    var urlBackup = `/${serverName}_backup?q=${q}`
    try {
        return await getJSON(urlServ)
    } catch (error) {
        return await getJSON(urlBackup)
    }
}

async function gougleSearch(q) {
    var servers = ["image", "video", "web"]
    var timeout = new Promise((resolve) =>
        setTimeout(resolve, 80, Error('timeout'))
    )
    var result = []
    for (var server of servers) {
        try {
            var works = await Promise.race(timeout, queryServers(server, q))
            result.push(works)

        } catch (error) {
                throw error
        }
    }
    return {image: result[0], video: result[1], url: result[2]}
}