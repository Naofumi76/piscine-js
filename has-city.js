function hasCity(country, arr) {
    return function(city) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === city) {
                return `${city} is a city from ${country}`
            } 
        }
        return `${city} is not a city from ${country}`
    }
}

const citiesInUSA = ["New York", "Los Angeles", "Chicago", "Houston"]
const isCityInUSA = hasCity("USA", citiesInUSA)
console.log(isCityInUSA("Chicago"))
console.log(isCityInUSA("Paris"))