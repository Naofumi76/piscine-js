function citiesOnly(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array')
    }
    return arr.map(obj => obj.city)
}

console.log(citiesOnly([
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
  ])) // -> ['Los Angeles', 'San Francisco']


function upperCasingStates(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array')
    }
    return arr.map(obj => obj.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
}

console.log(upperCasingStates(["test","PLUSIEURS mots", "123test"]))


function fahrenheitToCelsius(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array')
    }
    return arr.map(temp => {
        const tempFahr = parseInt(temp.replace('F', ''), 10)

        const cels = (tempFahr - 32) * 5 / 9
        
        return `${Math.floor(cels)}°C`
    });
}

console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])) // -> ['20°C', '15°C', '-4°C'])


function trimTemp(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    arr.forEach(obj => {
        obj.temperature = obj.temperature.trim().replace(/\s+/g, '');
    })
    return arr
}

console.log(trimTemp([
  { city: 'Los Angeles', temperature: '  101 °F   ' },
  { city: 'San Francisco', temperature: ' 84 ° F   ' },
]) /* -> [
  { city: 'Los Angeles', temperature: '101°F' },
  { city: 'San Francisco', temperature: '84°F' },
] */
)


function tempForecasts(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    return arr.map(obj => {
        const city = upperCasingStates([obj.city]);
        const state = upperCasingStates([obj.state]);
        const forecast = fahrenheitToCelsius([obj.temperature])[0];
        return `${forecast}elsius in ${city}, ${state}`
    });
}

console.log(tempForecasts([
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california',
      region: 'West',
    },
  ]) // -> ['38°Celsius in Pasadena, California']
)