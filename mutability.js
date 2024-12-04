// Mutability
console.log('---------- Mutability ----------')

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

console.log(person)
console.log(clone1)
console.log(clone2)
console.log(samePerson)
