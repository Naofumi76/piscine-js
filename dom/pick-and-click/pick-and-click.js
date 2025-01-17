export function pick() {
    var colorHslDiv = document.createElement('div')
    colorHslDiv.classList.add('hsl')
    colorHslDiv.style.position = 'absolute'
    colorHslDiv.style.top = '50%'

    var colorHueDiv = document.createElement('div')
    colorHueDiv.classList.add('hue')
    colorHueDiv.classList.add('text')
    colorHueDiv.style.position = 'absolute'


    var colorLightDiv = document.createElement('div')
    colorLightDiv.classList.add('luminosity')
    colorLightDiv.classList.add('text')
    colorHueDiv.style.position = 'absolute'


    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.style.position = "absolute"
    svg.style.top = "0"
    svg.style.left = "0"
    svg.style.width = "100%"
    svg.style.height = "100%"
  
    const axisX = document.createElementNS("http://www.w3.org/2000/svg", "line")
    axisX.setAttribute("id", "axisX")
    axisX.setAttribute("stroke", "black")
    axisX.setAttribute("stroke-width", "2")
  
    const axisY = document.createElementNS("http://www.w3.org/2000/svg", "line")
    axisY.setAttribute("id", "axisY")
    axisY.setAttribute("stroke", "black")
    axisY.setAttribute("stroke-width", "2")
  
    svg.appendChild(axisX)
    svg.appendChild(axisY)
    document.body.appendChild(svg)


    document.body.appendChild(colorHslDiv)
    document.body.appendChild(colorHueDiv)
    document.body.appendChild(colorLightDiv)
    document.addEventListener('mousemove', event => {
        axisX.setAttribute("x1", event.clientX)
        axisX.setAttribute("x2", event.clientX)
        axisX.setAttribute("y1", 0);
        axisX.setAttribute("y2", window.innerHeight)

        axisY.setAttribute("y1", event.clientY)
        axisY.setAttribute("y2", event.clientY)
        axisY.setAttribute("x1", 0)
        axisY.setAttribute("x2", window.innerWidth)
        var color = Math.round(event.clientX/window.innerWidth*360)
        var opacity = Math.round(event.clientY/window.innerHeight*100)
        document.body.style.background = `hsl(${color}, 50%, ${opacity}%)`
        colorHslDiv.textContent = `hsl(${color}, 50%, ${opacity})`
        colorHueDiv.textContent = `hue\n${color}`
        colorLightDiv.textContent = `luminosity\n${opacity}%`
    })

    document.addEventListener('click', () => {
        navigator.clipboard.writeText(colorHslDiv.textContent)
    })
}