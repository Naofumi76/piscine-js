const person = {
    name: 'Name',
    age: 0,
    country: 'COUNTRY'
}

const clone1 = Object.assign({}, person)
const clone2 = Object.assign({}, person)
const samePerson = person

person.age += 1
person.country = 'US'