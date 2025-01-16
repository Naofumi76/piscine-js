import { colors } from './fifty-shades-of-cold.data.js'

export function generateClasses() {
    var styleContainer = document.createElement('style')
    document.head.appendChild(styleContainer)
    let actualStyle = ''
    colors.forEach(color => {
        actualStyle += `.${color.toLowerCase()}{
    background: ${color}
}\n`
    })
    styleContainer.textContent = actualStyle
}

export function generateColdShades() {
    var coldShades = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']
    colors.forEach(color => {
        for (var i = 0; i < coldShades.length; i++) {
            if (color.toLowerCase().includes(coldShades[i])) {
                var colorDiv = document.createElement('div')
                colorDiv.classList.add(color.toLowerCase())
                colorDiv.innerHTML = color.toLowerCase()
                colorDiv.addEventListener('click', () => choseShade(color.toLowerCase()));
                document.body.appendChild(colorDiv);
            }
        }
    })
}

export function choseShade(shade) {
    var divs = document.querySelectorAll('div')
    divs.forEach(div => {
        div.classList.remove(...div.classList)
        div.classList.add(shade)
    })
}