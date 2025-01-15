function findIP(str) {
    // Regex to match IP addresses (nnn.nnn.nnn.nnn) and ports (:xxxxx).
    var regex = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d{1,5}))?/g
    var ipRegex = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/
    var portRegex = /:(\d{1,5})/g
    var matchesIP = str.match(regex)
    var matchesPort = []
    if (!matchesIP) {
        return []
    } 
    var validIPS = []
    for (var match of matchesIP) {
        var ip = match.match(ipRegex)
        if (ip) {
            var ipVals = (ip[0].split("."))
            var isValid = true
            for (var ipv of ipVals) {
                var part = parseInt(ipv)
                if (part < 0 || part > 255 || String(part) !== ipv) {
                    isValid = false
                    break
                }
            }
            if (isValid) {
                validIPS.push(match)
            }
        }
    }

    for (var match of validIPS) {
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

console.log(findIP('Here are some IPs: 0.1.23.7, 10.0.0.7, 10.04.0.7, 192.168.0.1, 10.0.0.256, 172.16.254.1:8080, 192.168.1.1:70000.'));