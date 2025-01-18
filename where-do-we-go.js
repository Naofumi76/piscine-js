import { places } from "./where-do-we-go.data.js"

export function explore() {
    var sortedPlaces = sortNorthToSouth()
    sortedPlaces.forEach(place => {
        var section = document.createElement('section')
        var image = getImageByName(place.name)
        console.log(image)
        console.log(`${place.name
            .split(",")[0]
            .toLowerCase()
            .replaceAll(" ", "-")}`)
        section.style.background = `url(./where-do-we-go_images/${image})`
        section.style.backgroundSize = "cover"
        section.style.backgroundPosition = "center"
        section.style.backgroundRepeat = "no-repeat"
        document.body.appendChild(section)
    })

    var lastPosition = window.scrollY
    var currentPlace = -1

    var compass = document.createElement('div')
    compass.classList.add('direction')
    compass.textContent = "N"
    document.body.appendChild(compass)
    document.addEventListener('scroll', () => {
        var newPosition = window.scrollY
        if (newPosition > lastPosition) {
            compass.textContent = "S"
        } else {
            compass.textContent = "N"
        }
        var newPlace = Math.round(newPosition / window.innerHeight)
        if (newPlace !== currentPlace && newPlace >= 0 && newPlace < sortedPlaces.length) {
            currentPlace = newPlace
            var aTag = document.querySelector('a')
            if (!aTag) {
                aTag = document.createElement('a')
                aTag.classList.add('location')
                aTag.target = '_blank'
                document.body.appendChild(aTag) 
            }
            aTag.href = `https://www.google.com/maps/place/${encodeURIComponent(sortedPlaces[currentPlace].coordinates)}`
            aTag.textContent = sortedPlaces[currentPlace].name+'\n'+ sortedPlaces[currentPlace].coordinates
            aTag.style.color = sortedPlaces[currentPlace].color
        }
        lastPosition = newPosition
    })
}

export function getImageByName(name) {
    if (!name) {
        return
    }
    return (name.split(',')[0].toLowerCase().replace(' ', '-') + '.jpg')
}

export function sortNorthToSouth() {
    var northPart = places.filter(place => place.coordinates.includes("N"))
    var southPart = places.filter(place => place.coordinates.includes("S"))
    northPart.sort((a, b) => {
        var cordsA=  a.coordinates.split("°")
        var cordsB = b.coordinates.split("°")
        var latA = Number(cordsA[0]) + Number(cordsA[1]) / 60
        var latB = Number(cordsB[0]) + Number(cordsB[1]) / 60
        return latA - latB
    })
    southPart.sort((a, b) => {
        var cordsA=  a.coordinates.split("°")
        var cordsB = b.coordinates.split("°")
        var latA = Number(cordsA[0]) + Number(cordsA[1]) / 60
        var latB = Number(cordsB[0]) + Number(cordsB[1]) / 60
        return latB - latA
    })
    return [...northPart,...southPart]
}