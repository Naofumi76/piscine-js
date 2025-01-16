export const getArchitects = () => {
    var architects = Array.from(document.querySelectorAll('a'))
    var notArchitects = Array.from(document.querySelectorAll('span'))
    return [architects, notArchitects]
}

export const getClassical = () => {
    const [architects] = getArchitects()
    const classical = architects.filter(architect => architect.classList.contains('classical'))
    const notClassical = architects.filter(architect => !architect.classList.contains('classical'))
    return [classical, notClassical]
}

export const getActive= () => {
    var [classical] = getClassical()
    var actives = classical.filter(architect => architect.classList.contains('active'))
    var inactives = classical.filter(architect =>!architect.classList.contains('active'))
    return [actives, inactives]
}

export const getBonannoPisano = () => {
    var bonannoPisano = document.getElementById('BonannoPisano')
    var [activeClassicArchitect] = getActive()
    var others = activeClassicArchitect.filter(person => person !== bonannoPisano)
    return [bonannoPisano, others]
}