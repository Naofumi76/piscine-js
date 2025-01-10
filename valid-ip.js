function findIP(str) {
    // Regex to match IP addresses (nnn.nnn.nnn.nnn) and ports (:xxxxx).
    var regex = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d{1,5}))?/g
    var portRegex = /:(\d{1,5})/g
    var matchesIP = str.match(regex)
    var matchesPort = []
    if (!matchesIP) {
        return []
    } 
    for (var match of matchesIP) {
        var port = match.match(portRegex)
        if (port) {
            port = parseInt(String(port[0]).replace(":", ""))
        } else {
            port = ""
        }
        if (port === "" || (port >= 0 && port <= 65535)) {
            matchesPort.push(match)
        }
    }
    return matchesPort
}

console.log(findIP('Here are some IPs: 192.168.0.1, 10.0.0.256, 172.16.254.1:8080, 192.168.1.1:70000.'));