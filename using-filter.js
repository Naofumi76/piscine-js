function filterShortStateName(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array')
    }
    return arr.filter(state => state.length < 7)
}

console.log(filterShortStateName(["Test", "Among", "Long State Name", "Big test gigantesque", "test40", "devrait disparaitre"]))

function filterStartVowel(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array')
    }
    return arr.filter(state => /^[AEIOUaeiou]/.test(state))
}

console.log(filterStartVowel(["Test", "Abcd", "Commence pas avec voyelle", "chef", "Il faut quelque chose"]))

function filter5Vowels(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array')
    }
    return arr.filter(state => {
        const vowelCount = (state.match(/[AEIOUaeiou]/g) || []).length;
        return vowelCount >= 5;
    })
}

console.log(filter5Vowels(["Aeiou", "test", "abcd", "EEEEEEEEE", "IEOUA"]))

function filter1DistinctVowel(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    return arr.filter(state => {
        const vowels = state.match(/[AEIOUaeiou]/g) || [];
        const distinctVowels = [...new Set(vowels)].length;
        // Set contains only unique values, which means that it should contain only 1 value inside
        return distinctVowels === 1;
    });
}

console.log(filter1DistinctVowel(["Aeiou", "test", "abcd", "contient toutes les voyelles possible même le a"]))

function multiFilter(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array')
    }
    return arr.filter(obj => {
        let capitalFilt = obj.capital && obj.capital.length >= 8
        let nameFilt = obj.name && !/^[AEIOUaeiou]/.test(obj.name)
        let tagFilt = obj.tag && /[AEIOUaeiou]/.test(obj.tag)
        let regionFilt = obj.region && obj.region !== "South"
        return capitalFilt && nameFilt && tagFilt && regionFilt
    })
}

const data = [
    { capital: "Chicago", name: "Illinois", tag: "Midwest", region: "North" },
    { capital: "Atlanta", name: "Georgia", tag: "Southeast", region: "South" },
    { capital: "Phoenix", name: "Arizona", tag: "Southwest", region: "West" },
    { capital: "Denver", name: "Colorado", tag: "Rocky", region: "South" },
    {capital: "ContientBcpLettre", name:"Commence pas par voyelle", tag: "Au moins une voyelle", region : "PasSud"}
];

console.log(multiFilter(data));

function filter1Vowel(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array')
    }
    return arr.filter(state => /[AEIOUaeiou]{1}/.test(state))
}