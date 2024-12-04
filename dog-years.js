// Dog Years
console.log('---------- Dog Years ----------')

const orbitalPeriods= {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}

function dogyears(planet, yearInSeconds) {
    const dogYearsPerHumanYear = 7
    const secondsInEarthYear = 31557600

    const earthYears = yearInSeconds / secondsInEarthYear

    const planetYears = earthYears / orbitalPeriods[planet]

    const dogYearsOnPlanet = planetYears * dogYearsPerHumanYear

    return dogYearsOnPlanet.toFixed(2)
}

console.log(dogyears('earth', 1000000000))
console.log(dogyears('mercury', 1000000000))