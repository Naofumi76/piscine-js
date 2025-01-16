export function createCircle() {
    document.addEventListener('click', event => {
        var circle = document.createElement('div')
        circle.classList.add('circle')
        circle.style.left = `${event.clientX}px`
        circle.style.top = `${event.clientY}px`
        circle.style.backgroundColor = 'white'
        document.body.appendChild(circle)
    })
}

export function moveCircle() {
    document.addEventListener('mousemove', event => {
        var circles = document.querySelectorAll('.circle')
        var lastCircle = circles[circles.length - 1]
        lastCircle.style.left = `${event.clientX}px`
        lastCircle.style.top = `${event.clientY}px`

        var box = document.querySelector('.box')
        var boxRect = box.getBoundingClientRect()
        var circleRect = lastCircle.getBoundingClientRect()
        if (circleRect.left < boxRect.left ||
            circleRect.right > boxRect.right ||
            circleRect.top < boxRect.top ||
            circleRect.bottom > boxRect.bottom) {
                lastCircle.style.backgroundColor = 'purple'
                setTimeout(() => {
                    lastCircle.style.backgroundColor = 'white'
                }, 1000)
            }
    })
}

export function setBox() {
    var box = document.createElement('div')
    box.style.height = '200px'
    box.style.width = '200px'
    box.style.position = 'absolute'
    box.style.left = '50%'
    box.style.top = '50%'
    box.style.transform = 'translate(-50%, -50%)'
    box.style.border = '2px solid red'
    document.body.appendChild(box)
}