import { gossips } from './gossip-grid.data.js'

export function grid() {
    var firstGossip = document.createElement('form')

    var textarea = document.createElement('textarea')
    textarea.setAttribute('name', 'gossipText')
    textarea.setAttribute('placeholder', 'Share your gossip here...')

    var submitButton = document.createElement('button')
    submitButton.setAttribute('type', 'submit')
    submitButton.textContent = 'Share gossip!'

    firstGossip.addEventListener('submit', (e) => {
        e.preventDefault()
        var newGossip = document.createElement('div')
        newGossip.classList.add('gossip')
        newGossip.textContent = textarea.value
        firstGossip.insertAdjacentElement('afterend', newGossip)
        textarea.value = ''
    })
    
    firstGossip.appendChild(textarea)
    firstGossip.appendChild(submitButton)



    
    firstGossip.classList.add('gossip')
    document.body.appendChild(firstGossip)

    for (let i = 0; i < gossips.length; i++) {
        var gridItem = document.createElement('div')
        gridItem.classList.add('gossip')
        gridItem.textContent = gossips[i]
        document.body.appendChild(gridItem)
    }




    var rangesContainer = document.createElement('div')
    rangesContainer.style.display = 'flex'
    rangesContainer.style.alignItems = 'center'
    rangesContainer.classList.add('ranges')


    
    var widthLabel = document.createElement('label')
    widthLabel.style.color = 'gray'
    widthLabel.textContent = 'width'
    widthLabel.style.marginLeft = '100px'


    var widthRange = document.createElement('input')
    widthRange.setAttribute('type', 'range')
    widthRange.setAttribute('id', 'width')
    widthRange.setAttribute('min', '200')
    widthRange.setAttribute('max', '800')
    widthRange.setAttribute('value', '400')
    widthRange.classList.add('range')

    var widthValue = document.createElement('label')
    widthValue.style.color = 'gray'
    widthValue.textContent = widthRange.value

    rangesContainer.appendChild(widthLabel)
    rangesContainer.appendChild(widthRange)
    rangesContainer.appendChild(widthValue)
    

    var fontSizeLabel = document.createElement('label')
    fontSizeLabel.style.color = 'gray'
    fontSizeLabel.textContent = 'fontSize'
    fontSizeLabel.style.marginLeft = '100px'

    var fontSizeRange = document.createElement('input')
    fontSizeRange.setAttribute('type', 'range')
    fontSizeRange.setAttribute('id', 'fontSize')
    fontSizeRange.setAttribute('min', '20')
    fontSizeRange.setAttribute('max', '40')
    fontSizeRange.setAttribute('value', '20')
    fontSizeRange.classList.add('range')

    var fontSizeValue = document.createElement('label')
    fontSizeValue.style.color = 'gray'
    fontSizeValue.textContent = widthRange.value
    
    rangesContainer.appendChild(fontSizeLabel)
    rangesContainer.appendChild(fontSizeRange)
    rangesContainer.appendChild(fontSizeValue)
    


    var backgroundLabel = document.createElement('label')
    backgroundLabel.style.color = 'gray'
    backgroundLabel.textContent = 'background'
    backgroundLabel.style.marginLeft = '100px'


    var backgroundRange = document.createElement('input')
    backgroundRange.setAttribute('type', 'range')
    backgroundRange.setAttribute('id', 'background')
    backgroundRange.setAttribute('min', '20')
    backgroundRange.setAttribute('max', '75')
    backgroundRange.setAttribute('value', '50')
    backgroundRange.classList.add('range')
    
    var backgroundValue = document.createElement('label')
    backgroundValue.style.color = 'gray'
    backgroundValue.textContent = widthRange.value
    
    rangesContainer.appendChild(backgroundLabel)
    rangesContainer.appendChild(backgroundRange)
    rangesContainer.appendChild(backgroundValue)
    
    
    document.body.appendChild(rangesContainer)

    
    widthRange.addEventListener('input', () => changeValues('width'))
    fontSizeRange.addEventListener('input', () => changeValues('fontSize'))
    backgroundRange.addEventListener('input', () => changeValues('background'))
}

function changeValues(id) {
    var gossips = document.querySelectorAll('.gossip')
    for (let i = 0; i < gossips.length; i++) {
        if (id === 'width') {
            gossips[i].style.width = `${document.getElementById('width').value}px`
        } else if (id === 'fontSize') {
            gossips[i].style.fontSize = `${document.getElementById('fontSize').value}px`
        } else if (id === 'background') {
            gossips[i].style.background = `hsl(0, 0%, ${document.getElementById('background').value}%)`
        }
    }
}
